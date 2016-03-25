/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    server.actions = {
        auth: require('./auth')(server),
        events: require('./events')(server),
        users: require('./users')(server),
        category: require('./categories')(server)
    };
};
