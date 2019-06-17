import 'index.less';
import { initPage } from 'ui/initialPageLinks.js';

/* Consts */
// FIXME don't hardcode namespaces not in core??
const DISALLOWED_NAMESPACES = [
	-1, // Special
	8, // MediaWiki
	10, // Template
	710, // TimedText
	828, // Module
	2300, // Gadget
	2302 // Gadget definition
];

function setup( specialUpload ) {
	/* const Api = new mw.Api( {
		ajax: {
			headers: {
				'Api-User-Agent': 'HotCat (mw:Extension:HotCat)'
			}
		}
	} ); */
	// const editableCategories = getEditableCategories( Api, mw.config.get( 'wgPageName' ) );
	if ( !specialUpload ) {
		mw.hook( 'wikipage.categories' ).add( ( $content ) => initPage( $content ) );
	}
}

function init() {
	const namespace = mw.config.get( 'wgNamespaceNumber' );
	const allowedNamespace = DISALLOWED_NAMESPACES.indexOf( namespace ) === -1;
	const specialUpload = ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Upload' );

	// documented difference to previous hotcat - does not load on nonexistant pages
	if (
		mw.config.get( 'wgIsProbablyEditable' ) &&
		mw.config.get( 'wgArticleId' ) !== 0 &&
		( allowedNamespace || specialUpload )
	) {
		setup( specialUpload );
	}
}

init();
