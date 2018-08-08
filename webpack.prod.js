// webpack plugins
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// config files
const pkg = require('./package.json');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        publicPath: pkg.paths.dist.cdn,
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false
          }),
          new OptimizeCSSAssetsPlugin({
            cssProcessorOptions: { safe: true, discardComments: true },
          })
        ]
    },
    resolve: {
        alias: {
        }
    },
    plugins: [
    ]
});
