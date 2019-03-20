// import getEditableCategories from '../modules/getEditableCategories.js';
import 'index.less';

/* function initUpload() {

}*/

function modifyCategory() {

}

function removeCategory() {

}

function initPage( $content, Api ) {
	// const editableCategories = getEditableCategories( Api, mw.config.get( 'wgPageName' ) );
	Api.get( 'foo' );
	const catlinks = $content.find( '.mw-normal-catlinks ul' );
	const newCategoryLink = $( '<li>' ).append( '<a>' ).html( '(+)' );
	const modifyLink = $( '<a>' ).html( '(±)' ).on( 'click', modifyCategory );
	const removeLink = $( '<a>' ).html( '(–)' ).on( 'click', removeCategory );
	const removeModifyLinks = $( '<span>' )
		.addClass( 'ext-hotcat-removemodify' )
		.append( modifyLink )
		.append( removeLink );

	catlinks.after( newCategoryLink );
	catlinks.find( 'li' ).append( removeModifyLinks );
}

function setup( specialUpload ) {
	const Api = new mw.Api( {
		ajax: {
			headers: {
				'Api-User-Agent': 'HotCat (mw:Extension:HotCat)'
			}
		}
	} );

	if ( !specialUpload ) {
		mw.hook( 'wikipage.categories' ).add( ( $content ) => initPage( $content, Api ) );
	}
}

function init() {
	const namespace = mw.config.get( 'wgNamespaceNumber' );
	// FIXME don't hardcode namespaces not in core??
	const allowedNamespace = [
		-1, // Special
		8, // MediaWiki
		10, // Template
		710, // TimedText
		828, // Module
		2300, // Gadget
		2302 // Gadget definition
	].indexOf( namespace ) === -1;
	const specialUpload = ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Upload' );

	// documented difference to previous hotcat- does not load on nonexistant pages
	if (
		mw.config.get( 'wgIsProbablyEditable' ) &&
		mw.config.get( 'wgArticleId' ) !== 0 &&
		( allowedNamespace || specialUpload )
	) {
		mw.loader.using( [ 'mediawiki.api' ] ).then( () => setup( specialUpload ) );
	}
}

init();
