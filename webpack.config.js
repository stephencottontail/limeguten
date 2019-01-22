const path = require('path');
const webpack = require('webpack');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const wplib = [
	'blocks',
	'components',
	'date',
	'editor',
	'element',
	'i18n',
	'utils',
	'data'
];

let debug = process.env.NODE_ENV !== 'production';
let extractEditorStyles = new CssWebpackPlugin({
	filename: './editor.css'
});
let extractBlockStyles = new CssWebpackPlugin({
	filename: './block.css'
})

module.exports = {
	mode: debug ? 'development' : 'production',
	entry: './src/blocks.js',
	output: {
		path: __dirname + '/dist',
		filename: 'blocks.js',
		library: ['wp', '[name]'],
		libraryTarget: 'window'
	},
	/**
	 * Setting `externals` allows the use of `import __ from __` syntax for WP's
	 * built-in JS libraries. They first need to be listed as dependencies for
	 * the script that's designated as `editor_script` when you first call
	 * `register_block_type` in PHP.
	 *
	 * @link https://www.cssigniter.com/importing-gutenberg-core-wordpress-libraries-es-modules-blocks/
	 * @link https://webpack.js.org/configuration/externals/
	 */
	externals: wplib.reduce((externals, lib) => {
		externals[`@wordpress/${lib}`] = {
			window: ['wp', lib]
		};

		return externals;
	}, {}),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /editor\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: CssWebpackPlugin.loader,
						options: {
							publicPath: './'
						}
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'compressed'
						}
					}
				]
			},
			{
				test: /block\.scss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: CssWebpackPlugin.loader,
						options: {
							publicPath: './'
						}
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'compressed'
						}
					}
				]
			}
		]
	},
	plugins: [
		extractEditorStyles,
		extractBlockStyles
	]
}
