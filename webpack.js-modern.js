// js-modern, builds the modern JavaScript bundle

// node modules
const path = require('path');

// webpack plugins

// config files
const pkg = require('./package.json');

// js-legacy module
module.exports = {
    entry: {
        'retour': path.resolve(__dirname, pkg.paths.src.js + 'Retour.js'),
        'dashboard': path.resolve(__dirname, pkg.paths.src.js + 'Dashboard.js'),
    },
    output: {
        path: path.resolve(__dirname, pkg.paths.dist.base),
        filename: path.join('./js', '[name].js'),
        publicPath: '/cpresources/retour/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['env', {
                            modules: false,
                            useBuiltIns: true,
                            targets: {
                                browsers: [
                                    // The last two versions of each browser, excluding versions
                                    // that don't support <script type="module">.
                                    'last 2 Chrome versions', 'not Chrome < 60',
                                    'last 2 Safari versions', 'not Safari < 10.1',
                                    'last 2 iOS versions', 'not iOS < 10.3',
                                    'last 2 Firefox versions', 'not Firefox < 54',
                                    'last 2 Edge versions', 'not Edge < 15',
                                ],
                            },
                        }],
                    ],
                    plugins: ['syntax-dynamic-import'],
                },
            },
            {
                test: /\.pcss$/,
                loader: 'ignore-loader'
            }
        ]
    }
};
