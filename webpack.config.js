const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
	config = {
		entry: ['babel-polyfill', './src/index.js'],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'app.bundle.js',
			publicPath: '/'
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.html'
			}),
			new MiniCssExtractPlugin({
				filename: "styles.min.css"
			}),
			new CleanWebpackPlugin('./dist'),
			new CopyWebpackPlugin([
				{ from: 'src/web.config', to: './' }
			]),
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
					test: /\.scss$/,
					use: [
						argv === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
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
		}
	}

	if (argv.mode === 'development') {
		config.devtool = 'source-map'
		config.devServer = {
			inline: true,
			historyApiFallback: true
		}
	}

	if (argv.mode === 'production') {
		config.optimization = {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true
					}
				}
			},
			minimizer: [
				new OptimizeCSSAssetsPlugin({})
			]
		}
	}

	return config
}