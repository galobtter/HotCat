import getEditableCategories from '../modules/getEditableCategories.js';

/* function initUpload() {

}*/

function initPage( $content, Api ) {
	const editableCategories = getEditableCategories( Api, mw.config.get( 'wgPageName' ) );
	$content.find( '.mw-normal-catlinks li' ).append( ' (+)' );
}

function setup( specialUpload ) {
	const Api = new mw.Api( {
		ajax: {
			headers: {
				'Api-User-Agent': 'HotCat (mw:Extension:HotCat)'
			}
		}
	} );

	// FIXME exclude previews/only on view? allowing editing on preview prolly won't work
	mw.hook( 'wikipage.categories' ).add( ( $content ) => initPage( $content, Api ) );

}

( function init() {
	const namespace = mw.config.get( 'wgNameSpacwgNamespaceNumber' );
	// FIXME don't hardcode namespaces not in core??
	const allowedNamespace = [
		-1, // Special
		8, // MediaWiki
		10, // Template
		710, // TimedText
		828, // Module
		2300, // Gadget
		2302 // Gadget definition
	].indexOf( namespace ) !== -1;
	const specialUpload = ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Upload' );

	// documented difference to previous hotcat- does not load on nonexistant pages
	if (
		mw.config.get( 'wgIsProbablyEditable' ) &&
		mw.config.get( 'wgArticleId' ) !== 0 &&
		( allowedNamespace || specialUpload )
	) {
		mw.loader.using( [ 'mediawiki.api' ] ).then( () => setup( specialUpload ) );
	}
}() );
