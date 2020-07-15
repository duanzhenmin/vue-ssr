/**
 * @fileName renderHtml
 * @author dzm
 * @date 2020/7/13
 * @descripion
 */

"use strict";
const path = require("path");
const {createBundleRenderer} = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

function createRenderer(bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
        basedir: resolve('./../dist'),
        runInNewContext: false
    }))
}

function render(req, res, renderer) {
    res.setHeader("Content-Type", "text/html");
    const handleError = err => {
        if (err.url) {
            res.redirect(err.url)
        } else if(err.code === 404) {
            res.status(404).send('404 | Page Not Found')
        } else {
            res.status(500).send('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }

    let context = {
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            return handleError(err);
        }
        res.send(html);
    })
}

module.exports = {
    createRenderer,
    render
}
