function getEditableCategories( Api, title ) {
	const apiEditableCategories = false;
	if ( apiEditableCategories ) {
		// use that api
	} else {
		// loop through wgcategories to find extant categories..but slow
		// generate and use a piped, single regex
		// const categoryRegex = `\[\[\s*[Cc]ategory:${category}*\]\]`;

		const pageText = Api.get( {
			action: 'query',
			prop: 'revisions',
			titles: title,
			rvprop: 'content',
			rvslots: 'main',
			formatversion: 2
		} );

		// pageText.match( categoryRegex );
	}

	return mw.config.get( 'wgCategories' );
}

export default getEditableCategories;
