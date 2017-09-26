/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var User = require("../models/user.model")
var mongoose = require("mongoose");

module.exports={

    create : function (req,res) {
        // var data = req.body;
        // var requirements = {
        //     email:null,
        //     name:null,
        //     dob:null
        // };
        //
        // for(var k in requirements){
        //     if(!data[k] || data[k] == null || data[k] ==''){
        //         return res.status(400).json({
        //             code:400,
        //             message: "Please send " +k
        //         });
        //     }
        // }

        console.log("req ki body ", req.body)

        var user = new User(req.body)

        user.save(function (err) {
            if(err){
                return next(err)
            }
            else{
                res.json(user)
            }
        });
    },

    read : function (req, res) {
        console.log("request",req);
        console.log("params",req.params);
        console.log("request",req.query);
        User.find({}, function (err, users) {
            if(err){
                return next(err)
            }
            else{
                res.send({
                    code:200,
                    success:true,
                    data : users
                })
            }
        })
    },
    update : function (req,res) {
        console.log("firstName",req.body.firstName)

        User.findOneAndUpdate({firstName: req.body.firstName}, {$set:{lastName:"Khan"}},{new:true},function (err,user) {
            if(err){
                return next(err)
            }
            else{
                // console.log("ho gaya")
                // return res.json(user)
                res.send({
                    data : user,
                    code : 200,
                    success : true
                })
            }
        })
    },

    delete : function (req,res) {
        User.remove({firstName:req.body.firstName}, function (err,user) {
            if(err){
                return next(err)
            }
            else{
                res.send({
                    data : user,
                    code : 200,
                    success : true
                })
            }
        })
    },

    deleteByKey : function (req,res) {
        console.log("params", req.params);
        console.log("body", req.body);
        User.remove({_id:req.params._id} , function (err) {
            if(err){
                return next (err)
            }
            else{
                res.send({
                    message : "Successfuly delete user",
                    code:200,
                    success :true
                })
            }
        })
    }
}

