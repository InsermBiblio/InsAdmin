var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

if (!process.env.INSADMIN_HOST || !process.env.INSAPI_HOST) {
    throw new Error('environment variable INSADMIN_HOST and INSAPI_HOST need to be set');
}

module.exports = {
    entry: {
        main: './js/main.js',
        login: './js/login.js'
    },
    output: {
        path: __dirname + '/public/build',
        filename: '[name].js',
        publicPath: '/public/build'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2']
                },
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __INSADMIN_HOST__: JSON.stringify(process.env.INSADMIN_HOST),
            __INSAPI_HOST__: JSON.stringify(process.env.INSAPI_HOST)
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};
