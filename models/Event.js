/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    var EventSchema = server.mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        nbMaxParticipants: {
            type: Number,
            default: 10,
            required: true
        },
        categoryId: {
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        organisateur: {
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        participants: [{
            type: server.mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }]
    });

    EventSchema.plugin(require('mongoose-timestamp'));

    return server.mongoose.model('Event', EventSchema);
}