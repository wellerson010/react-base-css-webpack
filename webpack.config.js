const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8001,
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /.css?$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
}