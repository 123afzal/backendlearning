/**
 * Created by Codenvoi
 * website: http://www.codenvoi.com
 */
module.exports = function (app) {
    var index = require('../controllers/server.controller');
    var users = require("../controllers/user.controller");
    var employees = require("../controllers/employee.controller");
    //Users Route
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
        .post(employees.create)
        .get(employees.readE);
    app.route("/employee/login")
        .post(employees.login)

}