/**
 * @fileName webpack.base.config
 * @author dzm
 * @date 2020/7/14
 * @descripion
 */

"use strict";
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/public/index.html",
            filename: "index.html"
        })
    ]
}
