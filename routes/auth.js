/**
 * Created by Michel on 25/03/2016.
 */

var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {

    router.post(
        '/login',
        bodyparser,
        server.middlewares.ensureBodyFields(['email', 'password']),
        server.controllers.auth.login
    );

    router.post(
        '/logout',
        server.middlewares.ensureAuthenticated,
        server.controllers.auth.logout
    );

    return router;
};