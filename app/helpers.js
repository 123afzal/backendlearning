/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var joi = require("joi")
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
    }
}