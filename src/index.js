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

/*
export function initSpecialUpload() {
	if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Upload' ) {
		initSpecialPage();
	}
	const Api = new mw.Api( {
		ajax: {
			headers: {
				'Api-User-Agent': 'HotCat (mw:Extension:HotCat)'
			}
		}
	} );
	const editableCategories = getEditableCategories( Api, mw.config.get( 'wgPageName' ) );
}
*/

export function init( $content ) {
	const namespace = mw.config.get( 'wgNamespaceNumber' );
	const allowedNamespace = DISALLOWED_NAMESPACES.indexOf( namespace ) === -1;

	// documented difference to previous hotcat - does not load on nonexistant pages
	if (
		mw.config.get( 'wgIsArticle' ) && // Not in edit/history view etc
		!mw.config.get( 'wgDiffOldId' ) && // Not in diff view
		mw.config.get( 'wgArticleId' ) !== 0 && // Page exists
		mw.config.get( 'wgIsProbablyEditable' ) && // Page editable
		allowedNamespace
	) {
		initPage( $content );
	}
}

mw.hook( 'wikipage.categories' ).add( ( $content ) => {
	init( $content );
} );
