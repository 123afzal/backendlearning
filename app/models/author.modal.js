/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('../models/book.modal')

var authorSchema = new Schema({
    firstName : {type : String},
    lastName: {type : String},
    salary : {type : Number},
    gender : {type : String},
    email : {type :String},
    created :{
        type :Date,
        default :Date.now
    },
    books : [{type : Schema.Types.ObjectId, ref : 'books'}],
    image :{
        imageUrl : {type : String}
    }
});

var Author = mongoose.model('authors', authorSchema);
module.exports = Author;