/**
 * Created by zongchaoyang on 2017/6/9.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    entry: path.join(__dirname,'src/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'build.js',
        publicPath:"dist/"
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true
        })
    ]
}