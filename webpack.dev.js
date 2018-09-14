// webpack.dev.js - developmental builds
const LEGACY_CONFIG = 'legacy';
const MODERN_CONFIG = 'modern';

// node modules
const path = require('path');

// webpack plugins
const merge = require('webpack-merge');
const webpack = require('webpack');

// config files
const pkg = require('./package.json');
const common = require('./webpack.common.js');

// Development module exports
module.exports = [
    merge(
        common.legacyConfig,
        {
            output: {
                filename: path.join('./js', '[name]-legacy.[hash].js'),
            },
            mode: 'development',
            devtool: 'inline-source-map'
        }
    ),
    merge(
        common.modernConfig,
        {
            output: {
                filename: path.join('./js', '[name].[hash].js'),
            },
            mode: 'development',
            devtool: 'inline-source-map',
            devServer: {
                contentBase: './dist',
                hot: true
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin()
            ],
        }
    ),
];
