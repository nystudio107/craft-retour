// webpack.common.js - common webpack config

// node modules
const webpack = require('webpack');
const path = require('path');
const git = require('git-rev-sync');
const moment = require('moment');
const merge = require('webpack-merge');
// webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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

// Babel loader
const configureBabelLoader = (browserList) => {
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        'env', {
                        modules: false,
                        useBuiltIns: true,
                        targets: {
                            browsers: browserList,
                        },
                    }
                    ],
                ],
                plugins: [
                    'syntax-dynamic-import',
                    [
                        "transform-runtime", {
                        "polyfill": false,
                        "regenerator": true
                    }
                    ]
                ],
            },
        },
    };
};

// Image loader
const configureImageLoader = () => {
    return {
        test: /\.png|jpe?g|gif|svg$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[hash].[ext]'
        }
    };
};

// Postcss loader
const configurePostcssLoader = (build) => {
    if (build) {
        return {
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
        };
    } else {
        return {
            test: /\.pcss$/,
            loader: 'ignore-loader'
        };
    }
};

// The base webpack config
const baseConfig = {
    name: 'retour',
    entry: {
        'retour': path.resolve(__dirname, pkg.paths.src.js + 'Retour.js'),
        'dashboard': path.resolve(__dirname, pkg.paths.src.js + 'Dashboard.js'),
    },
    output: {
        path: path.resolve(__dirname, pkg.paths.dist.base),
        publicPath: '/cpresources/retour/'
    },
    optimization: {
        splitChunks: {},
    },
    resolve: {
        alias: {}
    },
    plugins: [
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

// Legacy webpack config
const legacyConfig = {
    output: {
        filename: path.join('./js', '[name]-legacy.js'),
    },
    module: {
        rules: [
            configureBabelLoader([
                '> 1%',
                'last 2 versions',
                'Firefox ESR',
            ]),
            configureImageLoader(),
            configurePostcssLoader(true),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, pkg.paths.dist.base),
            filename: path.join('./css', '[name].css'),
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([]),
    ]
};

// Modern webpack config
const modernConfig = {
    output: {
        filename: path.join('./js', '[name].js'),
    },
    module: {
        rules: [
            configureBabelLoader([
                // The last two versions of each browser, excluding versions
                // that don't support <script type="module">.
                'last 2 Chrome versions', 'not Chrome < 60',
                'last 2 Safari versions', 'not Safari < 10.1',
                'last 2 iOS versions', 'not iOS < 10.3',
                'last 2 Firefox versions', 'not Firefox < 54',
                'last 2 Edge versions', 'not Edge < 15',
            ]),
            configurePostcssLoader(false),
        ],
    },
};

// Common module
module.exports = {
    'legacyConfig': merge(
        baseConfig,
        legacyConfig,
    ),
    'modernConfig': merge(
        baseConfig,
        modernConfig,
    ),
};
