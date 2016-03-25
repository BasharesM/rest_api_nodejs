/**
 * Created by Michel on 25/03/2016.
 */

var jwt = require('jsonwebtoken');

module.exports = function (server) {
    return function (req, res, next) {
        var Token = server.models.Token;
        var token = req.headers.authorization;

        if (!token) {
            return res.status(401).send('Non autorisé');
        }

        jwt.verify(token, server.settings.TOKEN_SECRET, function (err, data) {
            if (data) {
                Token.findById(data.accessToken, function (err, data) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    if (!data) {
                        return res.status(401).send('Token invalide');
                    }

                    req.auth = req.auth || {};
                    req.auth.userId = data.userId;

                    next();
                });
            } else {
                return res.status(401).send('Token invalide');
            }
        });
    }
}