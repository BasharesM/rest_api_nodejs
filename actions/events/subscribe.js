/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {

    return function (req, res, next) {
        var User = new server.models.User;
        var event = new server.models.Event(req.body);

        event.save(function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }

            res.send(data);
        })
    }
};