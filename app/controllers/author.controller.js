/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var Author = require("../models/author.modal");
var mongoose = require("mongoose");
var joi = require("joi");
var helper = require("../helpers");
var cloudinary = require('cloudinary');
var config = require('../../config/cloudinary.config')

module.exports = {
    create: function (req, res) {
        console.log("body", req.body);

        var data = req.body;
        var validate = helper.validateSignUp(data);
        if (validate.error) {
            return res.send({
                message: validate.error.message,
                success: false
            })
        }
        else {
            var authorId = mongoose.Types.ObjectId();
            var author = new Author({
                _id: authorId,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                salary: req.body.salary,
                gender: req.body.gender,
                email: req.body.email
            });

            author.save(function (err, author) {
                if (err) {
                    return next(err);
                }
                else {
                    res.send({
                        code: 200,
                        message: "Successfully added new author",
                        date: author
                    })
                }
            })
        }
    },

    updateBooks: function (req, res) {
        console.log("abc", req.body.books);
        Author.findByIdAndUpdate(req.params.id,
            {$push: {books: {$each: req.body.books}}},
            {new: true}, function (err, author) {
                console.log("author", author);
                if (err) {
                    return next(err)
                }
                else {
                    return res.send({
                        message: "Successfully added book to this author",
                        code: 200,
                        data: author
                    })
                }
            })
    },

    readAuthor: function (req, res) {
        console.log("Reading k andar");
        Author.find({}, function (err, auhtor) {
            if (err) {
                return next(err)
            }
            else {
                return res.send({
                    message: "Success",
                    code: 200,
                    data: auhtor,
                })
            }
        }).populate({
            path: 'books',
            match: {price: {$gte: 130}},
            options: {sort: {edition: 1}}
        }).exec(function (err, book) {
            if (err) {
                return handleError(err)
            }
            else {
                console.log("Books", book)
            }
        })
    },

    //this method is first upload an image in cloudinary then it saves that image in user data
    uploadImage: function (req, res) {
        console.log("params",req.params);

        cloudinary.config(config.CLOUDINARY);

        cloudinary.uploader.upload('app//controllers//Desert.jpg')
            .then(function (result) {
                console.log("Result", result);
                Author.findByIdAndUpdate(req.params.id,
                    {
                        $set: {
                            image: {imageUrl: result.url}
                        }
                    },
                    {new: true}, function (err, author) {
                        console.log("author", author);
                        if (err) {
                            return res.send({
                                message: "User not found",
                                code: 500,
                                data: err
                            })
                        }
                        else {
                            return res.send({
                                message: "Success",
                                code: 200,
                                data: result
                            })
                        }
                    })
            })
            .catch(function (err) {
                return res.send({
                    message: "Faiure",
                    code: 500,
                    data: err
                })
            })
    }

}