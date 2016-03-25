/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    var UserSchema = server.mongoose.Schema({
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        events: [{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }],
        participations: [{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }]
    });

    UserSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('User', UserSchema);
}