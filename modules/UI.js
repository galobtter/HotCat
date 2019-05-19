export default class UI {
	initPage( $content ) {
		this.normalLinks = $content.find( '.mw-normal-catlinks' );
		this.catlist = this.normalLinks.find( 'ul' );

		const multiModifyLink = $( '<a>' )
			.html( '<span>+<sup>+</sup></span>' )
			.on( 'click', () => this.multiModify() );
		const multiModifyItem = $( '<span>' )
			.addClass( 'ext-hotcat-multimodify' )
			.append( '(' )
			.append( multiModifyLink )
			.append( ')' );

		const newCategoryLink = $( '<a>' )
			.html( '(+)' )
			.on( 'click', () => this.newCategory() );
		const newCategoryItem = $( '<li>' )
			.append( newCategoryLink );

		const modifyLink = $( '<a>' )
			.html( '(±)' )
			.on( 'click', () => this.modifyCategory() );
		const removeLink = $( '<a>' )
			.html( '(–)' )
			.on( 'click', () => this.removeCategory() );
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

	newCategory() {

	}

	modifyCategory() {

	}

	removeCategory() {

	}
}
