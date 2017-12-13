/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var joi = require("joi");
var jwt = require("jsonwebtoken");
var ab = require("../config/express");

module.exports = {
    validateLogin: function (inputs) {
        console.log("helper main aya login k", inputs);
        var schema = joi.object().keys({
            firstName: joi.string().strict().required().error(new Error("Fisrt Name  is Required. Must be a valid First Name")),
            salary: joi.number().strict().integer().required().error(new Error("Salary is Required. Must be a valid Number")),
        });
        return joi.validate(inputs, schema);
    },
    validateSignUp: function (inputs) {
        console.log("aya signup k helper main");
        var schema = joi.object().keys({
            firstName: joi.string().strict().required().error(new Error("Fisrt Name  is Required. Must be a valid First Name")),
            lastName: joi.string().strict().required().error(new Error("Last Name  is Required. Must be a valid Last Name")),
            salary: joi.number().strict().integer().required().error(new Error("Salary is Required. Must be a valid Number")),
            gender: joi.string().strict().required().error(new Error("Gender is Required. Must be a valid String")),
            email: joi.string().email().required().error(new Error("email is Required. Must be a valid email")),
        });
        return joi.validate(inputs, schema);
    },
    checkJwt : function(req, res, next){
        var token = req.body.token ||  req.query.token || req.headers['x-access-token'];
        console.log("token",token);
        if(!token || token == null || token == ''){
            return res.status(400).send({code:400,message:"UnAuthorized User", success:false});
        }
        if(jwt.verify(token, ab.secretKey)){
            next();
        }else{
            return res.status(400).send({code:400,message:"UnAuthorized User", success:false});
        }

    }
}