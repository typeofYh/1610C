const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
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
                use:['babel-loader']
            }
        ]
    },
    devServer:{
        port:8081,
        hot:true,
        proxy:{
            '/api':'http://localhost:3000'
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
            template:'./index.html',
            filename:'index.html',
            inject:'head'
        })
    ],
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.esm.js"
        }
    }
}