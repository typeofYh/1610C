const config = require('../config/index');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const baseConfig = {
    entry:config.entryPath,
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:path.resolve('index.html'),
            filename:'index.html'
        })
    ]
}

module.exports = baseConfig;