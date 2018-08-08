// node modules
const webpack = require('webpack');
const path = require('path');
const git = require('git-rev-sync');
const moment = require('moment');
// webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// config files
const pkg = require('./package.json');

// Clean settings
const pathsToClean = ['js', 'css'];
const cleanOptions = {
    root: path.resolve(__dirname, pkg.paths.dist.base),
    verbose: true,
    dry: false
};

// Common module
module.exports = {
    name: 'retour',
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 500
    },
    entry: {
        'retour': path.resolve(__dirname, pkg.paths.src.js + 'Retour.js'),
    },
    output: {
        path: path.resolve(__dirname, pkg.paths.dist.base),
        filename: path.join('./js', '[name].js')
    },
    resolve: {
        alias: {
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.png|jpe?g|gif|svg$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash].[ext]'
                }
            },
            {
                test: /\.pcss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, pkg.paths.dist.base),
            filename: path.join('./css', '[name].css'),
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([
        ]),
        new webpack.BannerPlugin({
            banner: [
                '/*!',
                ' * @project        ' + pkg.copyright,
                ' * @name           ' + '[filebase]',
                ' * @author         ' + pkg.author,
                ' * @build          ' + moment().format('llll') + ' ET',
                ' * @release        ' + git.long() + ' [' + git.branch() + ']',
                ' * @copyright      Copyright (c) ' + moment().format('YYYY') + ' ' + pkg.copyright,
                ' *',
                ' */',
                ''
            ].join('\n'),
            raw: true
        }),
    ]
};
