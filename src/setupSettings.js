export default function setupSettings() {
	const ls = mw.libs.libSettings;

	const optionsConfig = new ls.OptionsConfig( {

	} );

	const settings = new ls.Settings( {
		optionsConfig: optionsConfig
	} );

	const options = settings.get();
}
