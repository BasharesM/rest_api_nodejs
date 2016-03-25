/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {
    return function (fields) {
        return function (req, res, next) {
            var errors = [];

            fields.forEach(function (field) {
                if (!req.body[field]) {
                    errors.push(field);
                }
            });

            if (errors.length > 0) {
                return res.status(400).send('Missing fields ' + errors);
            }

            next();
        }
    }
}