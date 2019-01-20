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
		filename: 'blocks.js'
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
