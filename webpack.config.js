const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = {
    BUILD: path.resolve(__dirname, 'build'),
    SRC: path.resolve(__dirname, 'src'),
    CSS: path.resolve(__dirname, 'css')
}

module.exports = {
    entry: {
        main: [
            'babel-polyfill',
            path.join(paths.SRC, 'index.js'),
        ]
    },
    output: {
        path: paths.BUILD,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('styles.min.css'),
        new CleanWebpackPlugin([paths.BUILD]),
        new CopyWebpackPlugin([
            { from: 'src/web.config', to: paths.BUILD }
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: { minimize: true }
                    },
						'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }],
			}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}