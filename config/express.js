/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser")
var passport = require("passport")



module.exports = function () {
    var app = express();
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    // app.use(passport.initialize());
    // app.usr(passport.session());
    mongoose.connect('mongodb://localhost:27017/moviee');
    require("../app/routes/server.router")(app)
    return app
}


//All libraries load before routing