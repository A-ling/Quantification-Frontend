# Quantification-Frontend
quantization-frontend project

node_modules
.gitignore
.project


#npm run start   production
#npm run dev      development



#webpack使用：https://www.cnblogs.com/huangguojin/articles/6702873.html
#1.新建项目目录文件夹：Quantication-Frontend   npm init初始化一下项目，生成package.json
#2.在文件根目录下创建文件“webpack.config.js”，在根目录下面创建一个文件夹命名为“src”，在下面创建一个文件命名为index.js,在项目中安装webpack，在Terminal中执行操作
#npm install --save-dev webpack
#npm install --save-dev webpack-dev-server
#npm install --save-dev webpack-cli
#编写配置文件webpack.config.js，修改package.json文件，执行npm run start或者webpack
#webpack.config.js：
#var path = require('path'); //引文文件路径
#module.exports = {
#    mode:'none',
#    entry: ['./src/index'], //入口文件
#    output: {
#        path: path.join(__dirname, 'dist'), //打包出口文件路径
#        filename: 'index.js' //打包文件名
#    },
#	devServer: {
#       //配置nodejs本地服务器，
#      contentBase: './dist',
#       hot: true //本地服务器热更新
#   }
#}
#3.安装工具处理样式表：在src目录下面添加文件main.css，并添加代码   执行：npm install --save-dev style-loader css-loader
#修改配置并在index.js中引入css文件
#4.使用 extract-text-webpack-plugin就可以把css从js中独立抽离出来：执行npm install --save-dev extract-text-webpack-plugin
#修改配置
#报错提示：Chunk.entrypoints...
#解决方案：https://www.imooc.com/qadetail/260916
#执行：npm install --save-dev extract-text-webpack-plugin@next
#5.安装html-webpack-plugin：npm install html-webpack-plugin --save-dev  修改配置
#报错提示：webpack.optimize.UplifyJsPlugin has been removed...
#解决方案：配置文件添加：var UglifyJsPlugin=require('uglifyjs-webpack-plugin');  并用new UglifyJsPlugin()代替插件使用方式
#报错提示：can't resolve 'postcss-loader'...
#解决方案：npm install postcss-loader -d
#6.每次打包之前，删除上一次打包生成的文件.执行：npm install clean-webpack-plugin --save-dev
#修改配置
#7.webpack服务配置和打包配置。新建webpack.config.dev.js和webpack.config.prod.js
#8.添加解析less样式文件的扩展.执行：npm install --save-dev less-loader less
#修改配置
#9.安装压缩图片的扩展.执行：npm install  img-loader   url-loader  file-loader   --save-dev
#修改配置
#10.浏览器自行打开浏览器.执行：npm install open-browser-webpack-plugin --save-dev
#修改配置
#11.安装jquery,bootstrap,echarts
#npm install jquery -D
#npm install popper.js -D
#npm install bootstrap@4.0.0-beta -D
#npm install echarts --save

