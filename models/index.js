/**
 * Created by Michel on 25/03/2016.
 */

var mongoose = require('mongoose');

module.exports = function (server) {
    server.mongoose = mongoose.connect(server.settings.db.mongo);

    server.models = {
        Category: require('./Category')(server),
        Event: require('./Event')(server),
        User: require('./User')(server)
    };
};