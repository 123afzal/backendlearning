/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
// var express = require('express')
// var app = express();
//
// app.use('/',function (req,res) {
//     res.send("Hello again express");
// })
//
// app.listen(4040);
// console.log("server is up on port 4040");
//
// module.exports = app;
var express = require("./config/express")

var app = express()

var  server = app.listen(4200)

module.exports = app;

console.log("server is up on port",server.address().port)