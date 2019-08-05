const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: [ 'babel-polyfill', './src/js/app.js' ],

    devtool: 'inline-source-map',
    
    output: {
        filename: './js/main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        // A webpack plugin to remove/clean your build folder(s).
        new CleanWebpackPlugin(),
        // Plugin that simplifies creation of HTML files to serve your bundles
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    }
}