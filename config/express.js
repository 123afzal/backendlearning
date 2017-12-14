/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser")
var passport = require("passport")
var morgan = require("morgan")
module.exports = {
    secretKey : "thisisdude"
}


module.exports = function () {
    var secretKey ="thisisdude";
    var app = express();
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    mongoose.connect('mongodb://localhost:27017/moviee');
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(morgan('dev'))
    require("../app/routes/server.router")(app,secretKey)
    return app
}


//All libraries load before routing