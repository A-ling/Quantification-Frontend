var path = require('path'); //引文文件路径
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var hostBase = "http://localhost:8081";

module.exports = {
	mode : 'development',
    devtool: 'cheap-eval-source-map',
    /* entry: [
        './src/index'
    ], */
	entry:{
		common:'./src/common/common.js',
		index:'./src/index.js',
		brinson_details:'./src/brinson_details/brinson_details.js',
		barra:'./src/barra/barra.js',
		barra_details:'./src/barra_details/barra_details.js',
		barra_risk:'./src/barra_risk/barra_risk.js',
	},
    output: {
        path: path.join(__dirname, 'dev'),
        filename: '[name].js',
		publicPath: hostBase,
		
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new OpenBrowserPlugin({ url: hostBase+'/index' }),
        new HtmlWebpackPlugin({
			filename:'index',
            template: './src/index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
			filename:'brinson_details',
            template: './src/brinson_details/brinson_details.html',
            chunks:['brinson_details']
        }),
        new HtmlWebpackPlugin({
			filename:'barra',
            template: './src/barra/barra.html',
            chunks:['barra']
        }),
        new HtmlWebpackPlugin({
			filename:'barra_details',
            template: './src/barra_details/barra_details.html',
            chunks:['barra_details']
        }),	
        new HtmlWebpackPlugin({
            filename:'barra_info/barra_details',
            template: './src/barra/detail/barra_details.html',
            chunks:['barra_details']
        }), 
        new HtmlWebpackPlugin({
			filename:'barra_risk',
            template: './src/barra_risk/barra_risk.html',
            chunks:['barra_risk']
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Popper: ['popper.js', 'default'],
        }),
    ],
    module: {
		
        rules: [
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }
            ,{
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude:/node_modules/
            },{
                test: /\.json$/,
                loader: "json-loader"
            },{
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                },]},
			/* {
			//正则匹配后缀.png、.jpg、.gif图片文件;
			  test: /\.(png|jpg|gif)$/i,
				 use: [{//加载url-loader 同时安装 file-loader;
					   loader : 'url-loader',
						  options : {
								 //小于10000K的图片文件转base64到css里,当然css文件体积更大;
						  limit : 10000,
							   //设置最终img路径;
						   name : '/img/[name].[ext]'
					   }
					 },
					 {
						//压缩图片(另一个压缩图片：image-webpack-loader);
						loader : 'img-loader?minimize&optimizationLevel=5&progressive=true'
					 },]
			} */
			{
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                options:{
                    publicPath:'/'
                }
            }
        ]
    },
    devServer: {
        contentBase: './dev/',
        hot: true,
        host: '127.0.0.1',
        port: '8081'
    }
}