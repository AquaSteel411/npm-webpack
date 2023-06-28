const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserJSWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

console.log('dev')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        compress: true,
        static: './dist',
        hot: true,
    },
    stats: {
        children: false
    },
    devtool: 'inline-source-map',

    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            title: 'Development'
        }),
        new TerserJSWebpackPlugin(),
        new OptimizeCSSAssetsWebpackPlugin(),
        new StylelintWebpackPlugin(),
        new ESLintPlugin({eslintPath: 'eslint'})
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserJSWebpackPlugin({}), new OptimizeCSSAssetsWebpackPlugin({})],
    },
    module: {
        rules: [
            {
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    'css-loader',
                ],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
        ]
    }
}

