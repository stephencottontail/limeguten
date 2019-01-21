const path = require('path');
const webpack = require('webpack');
const CssWebpackPlugin = require('mini-css-extract-plugin');

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
	 * built-in JS libraries. From my tests, you can loop through the libraries like
	 * they do at the link, but if one of the libraries isn't in `node_modules`,
	 * none of the libraries get externalized correctly. In this particular case,
	 * we'll only load the libraries when we need them, but it's something to keep
	 * in mind.
	 *
	 * @link https://www.cssigniter.com/importing-gutenberg-core-wordpress-libraries-es-modules-blocks/
	 * @link https://webpack.js.org/configuration/externals/
	 */
	externals: {
		'@wordpress/blocks': {
			window: [ 'wp', 'blocks' ]
		}
	},
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
