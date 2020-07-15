/**
 * @fileName webpack.base.config
 * @author dzm
 * @date 2020/7/14
 * @descripion
 */

"use strict";
const path = require("path");
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    mode: "development",
    entry: "./src/clientEntry.js",
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new VueSSRClientPlugin()
    ]
});
