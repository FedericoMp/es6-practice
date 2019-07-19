const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/src/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './js/webpack-dist')
    }
}