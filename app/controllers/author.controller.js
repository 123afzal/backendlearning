/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var Author = require("../models/author.modal")
var mongoose = require("mongoose");
var joi = require("joi");
var helper = require("../helpers");

module.exports={
    create : function (req,res) {
        console.log("body", req.body);

        var data = req.body;
        var validate = helper.validateSignUp(data)
        if(validate.error){
            return res.send({
                message : validate.error.message,
                success : false
            })
        }
        else{
            var authorId = mongoose.Types.ObjectId();
            var author = new Author({
                _id : authorId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                salary: req.body.salary,
                gender: req.body.gender,
                email: req.body.email
            });

            author.save(function (err, author) {
                if(err){
                    return next(err);
                }
                else{
                    res.send({
                        code : 200,
                        message : "Successfully added new author",
                        date : author
                    })
                }
            })
        }
    },

    updateBooks : function (req,res) {
        console.log("abc",req.body);
        Author.findByIdAndUpdate(req.params.id ,
                                {$push : {books : req.body.books[0]}},
                                {new:true} ,function (err,author) {
            console.log("author",author);
            if(err){
                return next(err)
            }
            else{
                return res.send({
                    message : "Successfully added book to this author",
                    code : 200,
                    data : author
                })
            }
        })
    }
}