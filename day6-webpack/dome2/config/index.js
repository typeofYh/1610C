const path = require('path');
const config = {
    entryPath:path.resolve('src/app.js'),
    development:{
        port:process.env.PORT || 3000,
        mode:'development'
    },
    production:{
        outputPath:path.resolve('dist'),
        mode:'production'
    }
}

module.exports = config;