/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    server.use('/auth', require('./auth')(server));
    server.use('/users', require('./users')(server));
    server.use('/events', require('./events')(server));
    server.use('/categories', require('./categories')(server));
};