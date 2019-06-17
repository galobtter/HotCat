export function initPage( $content ) {
	this.normalLinks = $content.find( '.mw-normal-catlinks' );
	this.catlist = this.normalLinks.find( 'ul' );

	const multiModifyLink = $( '<a>' )
		.html( '<span>+<sup>+</sup></span>' )
	const multiModifyItem = $( '<span>' )
		.addClass( 'ext-hotcat-multimodify' )
		.append( '(' )
		.append( multiModifyLink )
		.append( ')' );

	const newCategoryLink = $( '<a>' )
		.html( '(+)' )
	const newCategoryItem = $( '<li>' )
		.append( newCategoryLink );

	const modifyLink = $( '<a>' )
		.html( '(±)' )
	const removeLink = $( '<a>' )
		.html( '(–)' )
	const removeModifyItem = $( '<span>' )
		.addClass( 'ext-hotcat-removemodify' )
		.append( modifyLink )
		.append( removeLink );

	this.normalLinks.children( 'a' ).first().after( multiModifyItem );
	this.catlist.children().append( removeModifyItem );
	this.catlist.append( newCategoryItem );
}

loadOOui() {
	return mw.loader.using( [ 'oojs-ui-core' ] );
}

multiModify() {
	this.loadOOui().then( () => {
		const button = new OO.ui.ButtonWidget( {
			label: 'Save',
			title: 'Save',
			flags: [ 'primary', 'progressive' ],
			classes: [ 'ext-hotcat-save' ]
		} );
		this.normalLinks.children( '.ext-hotcat-multimodify' ).replaceWith( button.$element );
	} );
}
