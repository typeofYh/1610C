const config = require('../config/index');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const devConfig = {
    mode:config.development.mode,
    devServer:{
        port:config.development.port
    }
}

module.exports = webpackMerge(baseConfig,devConfig);