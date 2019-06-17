/**
 *
 * @param {string} categoryTitle
 * @param {Object} shortcuts
 * @return {mw.Title}
 */
export function normalize( categoryTitle, shortcuts ) {
	for ( const key in Object.keys() ) {
		categoryTitle = categoryTitle.replace( key, shortcuts[ key ] );
	}
	// FIXME hardcoding NS ok? (14 = category )
	return mw.title.newFromUserInput( categoryTitle, 14 );
}
