/**
 * @fileName webpack.base.config
 * @author dzm
 * @date 2020/7/14
 * @descripion
 */

"use strict";
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
    mode: "production",
    target: 'node',
    entry: "./src/serverEntry.js",
    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
});
