/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
module.exports = function (app,secretKey) {
    var index = require('../controllers/server.controller');
    var users = require("../controllers/user.controller");
    var employees = require("../controllers/employee.controller");
    var authors = require("../controllers/author.controller");
    var books = require("../controllers/book.controller");
    var helper = require('../helpers');

    //Users Routes
    app.get('/',index.render);
    app.route("/users")
        .post(users.create)
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    app.route("/users/:id")
        .get(users.read)
        .delete(users.deleteByKey);

    // Employee Routes
    app.route("/employee")
        .post(passToken,employees.create)
        .get(helper.checkJwt, employees.read);
    app.route("/employee/login")
        .post(passToken, employees.login);

    //Author Routes
    app.route("/author")
        .post(authors.create)
        .get(authors.readAuthor)

    app.route("/author/uploadImage")
        .post(authors.uploadImage)

    app.route("/author/:id")
        .put(authors.updateBooks);

    //Book Route
    app.route("/book")
        .post(books.create)
    function passToken (req,res,next){
        console.log(secretKey);
        req.secretKey = secretKey;
        next();
    }
};
