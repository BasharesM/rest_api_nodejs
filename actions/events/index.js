/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    return {
        create: require('./create')(server),
        remove: require('./remove')(server),
        get: require('./get')(server),
        update: require('./update')(server),
        subscribe: require('./subscribe')(server)
    }
};