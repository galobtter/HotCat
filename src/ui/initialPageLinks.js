/**
 * Construct our own category item
 * @param {string} categoryName
 * @param {boolean} isEditable
 * @returns {JQuery}
 */
function createCategoryItem( categoryName, isEditable ) {
	const categoryNameWithNS = `Category: ${categoryName}`;
	const $categoryItem = $( '<li>' )
		.addClass( 'hotcat-categoryitem' )
		.append(
			$( '<a>' )
				.prop( {
					href: `/wiki/${encodeURIComponent( categoryNameWithNS )}`,
					title: categoryName
				} )
				.text( categoryName )
		);

	if ( isEditable ) {
		const $removeLink = $( '<a>' )
			.addClass( 'hotcat-remove' )
			.text( '(–)' );
		const $modifyLink = $( '<a>' )
			.addClass( 'hotcat-modify' )
			.text( '(±)' );
		const $links = $( '<span>' )
			.addClass( 'hotcat-editlinks' )
			.append( $removeLink, $modifyLink );
		$categoryItem.append( $links );
	}

	return $categoryItem;
}

/**
 * @param {JQuery} $content
 * @param {Object} categories {categoryName: true, categoryName: false}
 * True means it is editable, false means it is not.
 */
export function initPage( $content, categories ) {
	const categoryItems = [];
	const $normalLinks = $content.find( '.mw-normal-catlinks' );
	const $multiModify = $( '<span>' )
		.addClass( 'hotcat-multimodify' )
		.append( $( '<a>' ).append(
			'+<sup>+</sup>'
		) );
	const $newCategoryLink = $( '<a>' )
		.addClass( 'hotcat-new' )
		.text( '(+)' );
	const $newCategoryItem = $( '<li>' )
		.append( $newCategoryLink );

	for ( const category in categories ) {
		categoryItems.push( createCategoryItem( category, categories[ category ] ) );
	}

	const $catList = $( '<ul>' ).append( categoryItems );
	$catList.append( $newCategoryItem );

	$normalLinks.children( 'a' ).first().after( $multiModify );
	$normalLinks.children( 'ul' ).replaceWith( $catList );
}

/*
loadOOui() {
	return mw.loader.using( [ 'oojs-ui-core' ] );
}

multiModify() {
	const loadOOui().then( () => {
		const button = new OO.ui.ButtonWidget( {
			label: 'Save',
			title: 'Save',
			flags: [ 'primary', 'progressive' ],
			classes: [ 'ext-hotcat-save' ]
		} );
		const normalLinks.children( '.ext-hotcat-multimodify' ).replaceWith( button.$element );
	} );
}
*/
