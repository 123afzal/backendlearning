/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author = require('../models/author.modal');

var bookSchema = new Schema({
    name : {type : String},
    title: {type : String},
    edition : {type : Number},
    isbn : {type : String},
    price : {type : Number},
    created :{
        type :Date,
        default :Date.now
    }
});

var Book = mongoose.model('books', bookSchema);
module.exports = Book;