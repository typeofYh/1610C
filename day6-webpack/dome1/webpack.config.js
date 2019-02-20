const path = require('path');
const webpack = require('webpack');
const filepath = (filename)=>{
    return path.join(__dirname,filename);
}
const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');
const CssPlugin = new ExtractPlugin('[name].css');
const SassPlugin = new ExtractPlugin('[name].css')
module.exports = {
    mode:'development',
    entry:{
        app:filepath('src/app.js'),
        index:filepath('src/index.js')
    },
    output:{
        path:filepath('build'),
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:CssPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test:/\.(scss|sass)$/,
                //use:['style-loader','css-loader','sass-loader']
                use:SassPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                use:{
                    loader:'file-loader',
                    options:{
                        // outputPath:'/image/'
                    }
                }
            }
        ]
    },
    devServer:{
        port:8081,
        hot:true
    },
    plugins:[
        new HtmlPlugin({
            filename:'index.html',
            template:'./index.html'
            // inject:'head'  //注入位置
        }),
        new webpack.HotModuleReplacementPlugin(),
        CssPlugin,
        SassPlugin
    ]
}