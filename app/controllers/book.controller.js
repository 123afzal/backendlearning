/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var Book = require("../models/book.modal")
var mongoose = require("mongoose");
var joi = require("joi");
var helper = require("../helpers");

module.exports={
    create : function (req,res) {
        console.log("body", req.body);

        // var data = req.body;
        // var validate = helper.validateSignUp(data)
        // if(validate.error){
        //     return res.send({
        //         message : validate.error.message,
        //         success : false
        //     })
        // }
        // else{
            var bookId = mongoose.Types.ObjectId();
            var book = new Book({
                _id : bookId,
                name : req.body.name,
                title: req.body.title,
                edition : req.body.edition,
                isbn : req.body.isbn,
                price : req.body.price,
            });

            book.save(function (err, book) {
                if(err){
                    return next(err);
                }
                else{
                    res.send({
                        code : 200,
                        message : "Successfully added new book",
                        date : book
                    })
                }
            })
        // }
    }
}