/**
 * Created by Michel on 25/03/2016.
 */

var sha1 = require('sha1');
var jwt = require('jsonwebtoken');

var TOKEN_SECRET = 'p4ssw0rd';

module.exports = function (server) {
    return function (req, res, next) {
        var User = server.models.User;
        var Token = server.models.Token;

        var email = req.body.email;
        var password = sha1(req.body.password);

        User.findOne({
            email: email,
            password: password
        }, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }

            if (!data) {
                return res.status(422).send('Invalid credentials');
            }

            new Token({
                userId: data._id
            }).save(function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }

                var accessToken = jwt.sign({accessToken: data._id}, server.settings.TOKEN_SECRET);
                res.send(accessToken);
            });
        });
    }
};