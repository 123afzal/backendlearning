/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    firstName : {type : String},
    lastName: {type : String},
    salary : {type : Number},
    gender : {type : String},
    email : {type :String},
    created :{
        type :Date,
        default :Date.now
    }
});

var Employee = mongoose.model("employees",EmployeeSchema);
module.exports =  Employee;