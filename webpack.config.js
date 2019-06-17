const path = require( 'path' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = {
	mode: 'development',
	entry: './modules/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'index.js'
	},
	resolve: {
		modules: [ 'modules' ]
	},
	optimization: {
		minimizer: [ new UglifyJsPlugin() ]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'env'
						]
					}
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	}
};
