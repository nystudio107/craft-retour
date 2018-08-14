// webpack.prod.js - production builds

// node modules
const glob = require("glob-all");
const path = require('path');
// webpack plugins
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
// config files
const pkg = require('./package.json');
const common = require('./webpack.common.js');

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

// Development module
module.exports = [
    merge(
        common.legacyConfig,
        {
            mode: 'production',
            devtool: 'source-map',
            optimization: {
                splitChunks: {
                },
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: true
                    }),
                    new OptimizeCSSAssetsPlugin({
                        cssProcessorOptions: {
                            map: {
                                inline: false,
                                annotation: true,
                            },
                            safe: true,
                            discardComments: true
                        },
                    })
                ]
            },
            plugins: [
                new PurgecssPlugin({
                    // Specify the locations of any files you want to scan for class names.
                    paths: glob.sync([
                        path.join(__dirname, pkg.paths.templates + "**/*.{twig,html}")
                    ]),
                    extractors: [
                        {
                            extractor: TailwindExtractor,
                            // Specify the file extensions to include when scanning for
                            // class names.
                            extensions: ["html", "js", "twig", "vue"]
                        }
                    ]
                })
            ]
        }
    ),
    merge(
        common.modernConfig,
        {
            mode: 'production',
            devtool: 'source-map',
            optimization: {
                splitChunks: {
                },
                minimizer: [
                    new UglifyJsPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: true
                    }),
                ]
            },
        }
    ),
];
