import createMediaWikiGateway from 'mediawiki.js';

export function createJavascriptGateway( api ) {
	const mediawikiGateway = createMediaWikiGateway( api );
	function getEditableCategories( title ) {
		// loop through wgcategories to find extant categories..but slow
		// generate and use a piped, single regex
		// eslint-disable-next-line no-useless-escape
		const categoryRegex = `\[\[\s*[Cc]ategory:${category}\s*\]\]`;

		const pageText = api.get( {
			action: 'query',
			prop: 'revisions',
			titles: title,
			rvprop: 'content',
			rvslots: 'main',
			formatversion: 2
		} );

		// pageText.match( categoryRegex );

		return mw.config.get( 'wgCategories' );
	}

	return {
		getEditableCategories,
		saveCategories: mediawikiGateway.saveCategories
	};
}
