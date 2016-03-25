/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    return {
        login: require('./login')(server),
        logout: require('./logout')(server)
    }
};