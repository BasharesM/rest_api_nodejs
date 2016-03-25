/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {

    return function (req, res, next) {

        var User = server.models.User;
        var Event = server.models.Event;

        Event.findByIdAndUpdate(req.params.id, {$pull: {participants: req.auth.userId}}, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }
        });

        User.findByIdAndUpdate(req.auth.userId, {$pull: {participations: req.params.id}}, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }
        });
    }
};