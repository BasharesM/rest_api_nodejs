/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    var TokenSchema = server.mongoose.Schema({
        userId: {
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    });

    TokenSchema.plugin(require('mongoose-timestamp'));
    return server.mongoose.model('Token', TokenSchema);
};