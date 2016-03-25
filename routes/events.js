/**
 * Created by Michel on 25/03/2016.
 */

var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (server) {
    router.get(
        '/',
        server.actions.events.get
    );
    router.post(
        '/',
        bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.create
    );
    router.get(
        '/:id/participants',
        server.actions.events.get
    );
    router.post(
        '/:id/subscribe',
        bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.subscribe
    );
    router.delete(
        '/:id',
        server.actions.events.remove
    );
    router.put(
        '/:id',
        bodyparser,
        server.actions.events.update
    );

    return router;
};