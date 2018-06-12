var path = require('path'); //引文文件路径
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
	entry: [
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dev'),
		filename: 'index.js',
		publicPath: "http://localhost:8081/",

	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles.css"),
		new OpenBrowserPlugin({
			url: 'http://localhost:8081'
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	module: {

		rules: [{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}, {
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			}, {
				test: /\.json$/,
				loader: "json-loader"
			}, {
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}, ]
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
				options: {
					publicPath: '/'
				}
			}
		]
	},
	devServer: {
		contentBase: './dev',
		hot: true,
		host: '127.0.0.1',
		port: '8081'
	}
}