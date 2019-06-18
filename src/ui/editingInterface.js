const NS_CATEGORY = 14; // FIXME hardcoded ns

/**
 * FIXME need to strip sortkey when searching
 * @param {string} initialTitle
 * @return {mw.widgets.TitleInputWidget}
 */
function createCategoryEditWidget( initialTitle ) {
	return new mw.widgets.TitleInputWidget( {
		namespace: NS_CATEGORY,
		validateTitle: false, // Need to allow pipes for sort keys.
		text: initialTitle
	} );
}
