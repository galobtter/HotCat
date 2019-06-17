export function confirmEditPrompt( text, saveMethod, cancelMethod ) {
	OO.ui.confirm( text ).then(
		() => { saveMethod(); },
		() => { cancelMethod(); }
	);
}
