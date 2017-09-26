/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName : String,
    lastName : String,
    password :String,
    userName : {
        type : String,
        trim :true
    },
    email : String,
    created :{
        type : Date,
        default : Date.now
    }
});

var User = mongoose.model("users",UserSchema)

module.exports = User;