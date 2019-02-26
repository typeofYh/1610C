const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        app:path.resolve('src/app.js')
    },
    output:{
        filename:'[name]-[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:{
                    test:/common/
                },
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        port:8080,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ],
    //解析模块路径
    resolve:{
        //配置文件默认类型
        extensions:['.js','.json','.css'],
        //配置别名
        alias:{
            'common$':path.resolve('src/js/common.js'),
            'vue$':'vue/dist/vue.esm.js',
            'style':path.resolve('src/css')
        }
    }
}