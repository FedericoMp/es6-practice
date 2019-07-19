const path = require('path');

module.exports = {
    
    mode: 'development',
    
    entry: './js/src/app.js',
    
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, './js/webpack-dist')
    },
    
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}