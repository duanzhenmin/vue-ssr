/**
 * @fileName renderHtml
 * @author dzm
 * @date 2020/7/13
 * @descripion
 */

"use strict";
const fs = require("fs");
const path = require("path");
const {createBundleRenderer} = require('vue-server-renderer');

const templatePath = path.join(__dirname, "./../../src/layout/default.html");
let templateHtml = fs.readFileSync(templatePath, "utf-8");
const vueSsrServerBundlePath = require("./../../dist/vue-ssr-server-bundle.json");
const vueSsrClientManifestPath = require("./../../dist/vue-ssr-client-manifest.json");

const renderer = createBundleRenderer(vueSsrServerBundlePath, {
    template: templateHtml,
    clientManifest: vueSsrClientManifestPath
});

exports.renderHtml = (app) => {
  if (!app) {
    throw Error("没有传入vue组件");
  }
  return renderer.renderToString(app);
}
