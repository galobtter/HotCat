/**
 * Construct our own category item for inclu
 * @param {string} categoryName
 * @param {boolean} isEditable
 * @returns {JQuery}
 */
function createCategoryItem( categoryName, isEditable ) {
	const categoryNameWithNS = `Category: ${categoryName}`;
	const elementTemplate =
	`
	<li>
	<a href="/wiki/${encodeURIComponent( categoryNameWithNS )} title = "${categoryNameWithNS}">
	${categoryNameWithNS}
	</a>
	${isEditable ? `<span class="hotcat-editlinks">
	<a>(±)</a><a>(–)</a>
	</span>` : ''}
	</li>`;
	return $( $.parseHTML( elementTemplate ) );
}

/**
 * Go back to using jquery to create html..yeah, need to preserve components as vars to add click handlers and stuff..
 * @param {JQuery} $content
 * @param {Object} categories {categoryName: true, categoryName: false} True means it is editable, false means it is not.
 */
export function initPage( $content, categories ) {
	const normalLinks = $content.find( '.mw-normal-catlinks' );
	const catlist = normalLinks.find( 'ul' );

	const multiModifyTemplate =
	$( $.parseHTML(
		`<span class = "hotcat-multimodify">
		(<a>+<sup>+</sup></a>)
		</span>`
	) );

	normalLinks.children( 'a' ).first().after( multiModifyTemplate );
	catlist.replaceWith( $( 'ul' ).append( elements ) );
	catlist.append( newCategoryItem );
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
