/**
 * @fileName index
 * @author dzm
 * @date 2020/7/13
 * @descripion
 */

"use strict";

const server = require('express')();
const config = require("../config/server.config");

const {renderHtml} = require("./helper/renderHtml");

server.get('*', (req, res) => {
  const app = renderHtml();

  renderHtml(app).then(html => {
    res.end(html);
  }, err => {
    console.log("err info => ", err);
    res.status(500).end('Internal Server Error')
  })
})

server.listen(config.port, config.host, () => {
  console.log('Server listening on http://' + config.host + ':' + config.port)
})
