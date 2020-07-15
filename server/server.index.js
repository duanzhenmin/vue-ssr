/**
 * @fileName server.index
 * @author dzm
 * @date 2020/7/15
 * @descripion
 */

"use strict";
const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "./../src/public/index.html");
let templateHtml = fs.readFileSync(templatePath, "utf-8");
const vueSsrServerBundlePath = require("./../dist/vue-ssr-server-bundle.json");
const vueSsrClientManifestPath = require("./../dist/vue-ssr-client-manifest.json");

const {createRenderer, render} = require("./helper/render");

const renderer = createRenderer(vueSsrServerBundlePath, {
    template: templateHtml,
    clientManifest: vueSsrClientManifestPath
});

module.exports=function (req, res) {
    render(req, res, renderer);
}
