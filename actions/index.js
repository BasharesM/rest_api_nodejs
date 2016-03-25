/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    server.actions = {
        auth: require('./auth')(server),
        event: require('./events')(server)
    };
};