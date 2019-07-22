const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    // entry: [ 'babel-polyfill', './src/js/app.js' ],
    entry: './src/ts/app.ts',

    devtool: 'inline-source-map',
    
    output: {
        filename: './js/main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.js']
    },
    
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    }
}