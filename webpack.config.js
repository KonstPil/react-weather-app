const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['./main.js'],
    },
    output: {
        filename: '[name].[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3300,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist')
                },
            ],
        }),
        new Dotenv()
    ],
    devtool: isDev ? "source-map" : '',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react'
                            ],
                            plugins: [
                                'babel-plugin-styled-components'
                            ]
                        }
                    }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(png|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
};