const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

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
        ]},
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
        new CleanWebpackPlugin(['build'])
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
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
                }
                ],
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