const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        app:path.join(__dirname,'src/app.js')
    },
    output:{
        filename:'[name]-[hash].js'
    },
    devServer:{
        port:8080
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:['vue-style-loader','css-loader']
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        },
        extensions:['.js','.css','.json','.vue']
    },
    plugins:[
        new VueLoader(),
        new HtmlPlugin({
            template:'./index.html',
            filename:'index.html'
        })
    ]
}