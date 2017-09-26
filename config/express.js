/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser")



module.exports = function () {
    var app = express();
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    mongoose.connect('mongodb://localhost:27017/moviee');
    require("../app/routes/server.router")(app)
    return app
}


//All libraries load before routing