const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyPl = require("uglifyjs-webpack-plugin");
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const config = {
	entry: {
		app: './src/app/index.js',
		vendor: './vendor.js'
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node-modules/],
				use: [ 
					{
						loader: 'ng-annotate-loader'
					},

					{
				  		loader: 'babel-loader',
						options: {
						presets: ['es2015']
						}
					}
				]
			},
			// {
			// 	test: /\.css$/,
			// 	exclude: [/node-modules/],
			// 	use: 'css-loader'
			// }

			{
				test: /\.scss$/, 
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					use: ['css-loader','sass-loader'],
					publicPath: '/dist'
				})
			},

			{
				test: /\.html$/,
				use: 'raw-loader',
				exclude: [path.resolve(__dirname, 'src/index.html')]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new cleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ["vendor", "manifest"]
		}),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify("1.05")
		}),
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true
		})
		// new UglifyPl()
	],
	devServer: {
		contentBase: path.join(__dirname + "dist"),
		compress: true,
		historyApiFallback: true,
		stats: "errors-only"
	}
}

// if(process.env.NODE_ENV === 'production') {

// }

module.exports = config;