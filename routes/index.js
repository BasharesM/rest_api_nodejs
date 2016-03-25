/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    server.use('/auth', require('./auth')(server));
};