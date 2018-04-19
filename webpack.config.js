const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = {
    DIST: path.resolve(__dirname, 'build'),
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
        path: paths.DIST,
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('styles.min.css'),
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            { from: 'src/web.config', to: paths.DIST }
        ])
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
                test: /\.(eot|svg|ttf|woff)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'stockportwingdings.[ext]'
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