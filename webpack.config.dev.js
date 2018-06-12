

var path = require('path'); //引文文件路径
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
//压缩js，webpack4.0后替代webpack.optimize.UglifyJsPlugin
var UglifyJsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
	mode:'none',
    devtool: 'source-map',
//  entry: ['./src/index'], //入口文件
//  output: {
//      path: path.join(__dirname, 'dist'), //打包出口文件路径
//      filename: 'index.js', //打包文件名
//  },
	entry: {  
	    //登陆后进入的主页面  
	    main: './src/index.js',
	    index_details:'./src/index_details.js',  
	  },  
	  output: {  
	    //输出到公共文件public/build下  
	    path: path.resolve(__dirname, 'dist'),  
	    //名称也就是对应的main.js和login.js  
	    filename: '[name].js',
	    publicPath: "http://localhost:8081/",
	  }, 
    module: {
		//mode:'none',
        rules: [
            {
              //正则匹配后缀.css文件;
              test: /\.css$/,
               //使用html-webpack-plugin插件独立css到一个文件;
               use: ExtractTextPlugin.extract({
                 //加载css-loader、postcss-loader（编译顺序从下往上）转译css
                  use: [{
                        loader : 'css-loader?importLoaders=1',
                        },
                        {
                         loader : 'postcss-loader',
                         //配置参数;
                           options: {
                           //从postcss插件autoprefixer 添加css3前缀;
                            plugins: function() {
                                             return [
                                      //加载autoprefixer并配置前缀,可加载更多postcss插件;
                                                      require('autoprefixer')({
                                                          browsers: ['ios >= 7.0']
                                                   })
                                               ];
                                             }
                                  }
                         }]
                })
            },
            {//正则匹配后缀.less文件;
              test: /\.less$/,
             //使用html-webpack-plugin插件独立css到一个文件;
              use: ExtractTextPlugin.extract({
                  use: [{
                         loader : 'css-loader?importLoaders=1',
                        },
                        {
                         loader : 'postcss-loader', //配置参数;
                         options: {
                            plugins: function() {
                                     return [
                                       require('autoprefixer')
                                       ({
                                        browsers: ['ios >= 7.0']
                                      })];
                               }
                          }
                         },
                        //加载less-loader同时也得安装less;
                       "less-loader"
                      ]
                 })
            },
			{
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
			}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /* new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }), */
		new UglifyJsPlugin(),
		new OpenBrowserPlugin({
			url: 'http://localhost:8081'
		}),
        new ExtractTextPlugin({
            filename :"[name].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html', //模板路径
            filename: "index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: './src/index_details.html', //模板路径
            filename: "index_details.html",
            inject: "body",
        }),
//      new CleanWebpackPlugin(['dist'], {
//          root: 'D:/projects/Quantification-Frontend/Quantification-Frontend/',
//          verbose: true,
//          dry: false,
//      }),
		new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery",
		  Popper: ['popper.js', 'default'],
        }),
    ],
	 /* //压缩js
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    }, */
    devServer: {
		contentBase: './dist',
		hot: true,
		host: '127.0.0.1',
		port: '8081'
	},
    resolve:{
              //设置可省略文件后缀名(注:如果有文件没有后缀设置‘’会在编译时会报错,必须改成' '中间加个空格。ps:虽然看起来很强大但有时候省略后缀真不知道加载是啥啊~);
           extensions: [' ','.css','.scss','.sass','.less','.js','.json'],
           //查找module的话从这里开始查找;
           modules: [path.resolve(__dirname, "src"), "node_modules"], //绝对路径;
        //别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
           alias: {
                  //设置全局jquery插件;
                 }
          }
}

/*
var path = require('path'); //引文文件路径
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool: 'cheap-eval-source-map',
//	entry: [
//		'./src/index'
//	],
//	output: {
//		path: path.join(__dirname, 'dev'),
//		filename: 'index.js',
//		publicPath: "http://localhost:8081/",
//
//	},
	entry: {  
	    //登陆后进入的主页面  
	    main: './src/index.js',
	    index_details:'./src/index_details.js',  
	  },  
	  output: {  
	    //输出到公共文件public/build下  
	    path: path.resolve(__dirname, 'dev'),  
	    //名称也就是对应的main.js和login.js  
	    filename: '[name].js', 
	    publicPath: "http://localhost:8081/",
	  }, 
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles.css"),
		new OpenBrowserPlugin({
			url: 'http://localhost:8081'
		}),
		new HtmlWebpackPlugin({
            template: './src/index.html', //模板路径
            filename: "index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: './src/index_details.html', //模板路径
            filename: "index_details.html",
            inject: "body",
        }),
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
*/