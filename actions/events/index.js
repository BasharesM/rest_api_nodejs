/**
 * Created by Michel et yassine on 25/03/2016.
 */

module.exports = function (server) {
    return {
        create: require('./create')(server),
        remove: require('./remove')(server),
        get: require('./get')(server),
        getEvents: require('./getEvents')(server),
        update: require('./update')(server),
        subscribe: require('./subscribe')(server),
        unsubscribe: require('./unsubscribe')(server),
        participants: require('./participants')(server)
    }
};
