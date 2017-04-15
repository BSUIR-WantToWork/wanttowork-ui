const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceDirectory = path.resolve(__dirname, 'src');
const publicDirectory = path.resolve(__dirname, 'public');
const distributionDirectory = path.resolve(__dirname, 'dist');

const sourceFilesExtension = /\.js$/;

module.exports = {
    entry: path.resolve(sourceDirectory, 'index.js'),
    output: {
        path: distributionDirectory,
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: sourceFilesExtension,
                loader: 'babel-loader',
                include: sourceDirectory
            },
            {
                test: sourceFilesExtension,
                loader: 'ng-annotate-loader',
                enforce: 'post'
            },
            {
                test: sourceFilesExtension,
                loader: 'eslint-loader',
                include: sourceDirectory,
                enforce: 'pre',
                options: {
                    failOnWarning: false,
                    failOnError: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: publicDirectory
            }
        ])
    ],

    devServer: {
        port: 8000,
        inline: true,
        historyApiFallback: true,
        contentBase: distributionDirectory
    }
};
