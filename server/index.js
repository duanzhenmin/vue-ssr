/**
 * @fileName index
 * @author dzm
 * @date 2020/7/13
 * @descripion
 */

"use strict";

const express = require('express');
const config = require("../config/server.config");
const isProd = process.env.NODE_ENV === 'production';

const localRender = require("./local.index");
const serverRender = require("./server.index");

const renderFn = isProd ? serverRender : localRender;

const app = express();
app.use(express.static("/dist"))

app.get('*', (req, res) => {
    renderFn(req, res);
});

app.listen(config.port, config.host, () => {
  console.log('Server listening on http://' + config.host + ':' + config.port)
})

//监听未捕获的异常
process.on('uncaughtException',function(err){
    console.log("uncaughtException===>", err);
})

//监听Promise没有被捕获的失败函数
process.on('unhandledRejection',function(err, promise){
    console.log("unhandledRejection===>", err);
    console.log("unhandledRejection===>", promise);
})
