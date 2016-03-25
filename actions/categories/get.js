/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {

    return function (req, res, next) {
        var Category = server.models.Category;
        var query = Category.find();

        query.exec(function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }

            res.send(data);
        });
    };
}