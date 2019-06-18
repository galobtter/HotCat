/**
 *
 * @param {CategoryDiff} categoryDiff
 * @param {function} saveMethod
 * @param {function} cancelMethod
 */
export function confirmEditPrompt( categoryDiff ) {
	const addedTemplate = categoryDiff.added ? `<li> ${mw.msg( 'hotcat-confirm-adding', categoryDiff.added )} + </li>\n` : '';
	const removedTemplate = categoryDiff.removed ? `<li> ${mw.msg( 'hotcat-confirm-removing', categoryDiff.removed )} + </li>\n` : '';
	const messageTemplate = `${mw.msg( 'hotcat-confirm-message' )}<ul>\n${addedTemplate}${removedTemplate}</ul>`;

	const messageDialog = new OO.ui.MessageDialog();
	const windowManager = new OO.ui.WindowManager();
	$( document.body ).append( windowManager.$element );
	windowManager.addWindows( [ messageDialog ] );
	windowManager.openWindow( messageDialog, {
		title: mw.msg( 'hotcat-confirm-title' ),
		message: new OO.ui.HtmlSnippet( messageTemplate )
	} );
}
