const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './src/index'
    },
    output: {
        path: './dist',
        libraryTarget: 'commonjs2',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ]
    },
    target: 'electron-renderer',
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                query: {
                    modules: true
                }
            }]
        }, {
            test: /\.png$/,
            loader: 'url-loader'
        }, {
            test: [/package$/, /package.json$/],
            use: 'json-loader'
        }
        ]
    }
};
