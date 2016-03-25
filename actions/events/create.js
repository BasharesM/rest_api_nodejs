/**
 * Created by Michel on 25/03/2016.
 */

module.exports = function (server) {

    return function (req, res, next) {
        var Category = server.models.Category;
        var Event = server.models.Event;

        Category.findOne({
            label: req.body.category
        }, function (err, data) {
            if (err) {
                return res.status(500).send(err);
            }

            // Catégorie non existante
            if (!data) {
                createCategory(createEvent);

            } else {
                req.body.categoryId = data._id;

                delete req.body.category;
                req.body.organisateur = req.auth.userId;
                req.body.participants = [req.auth.userId];

                createEvent();
            }
        });

        var createCategory = function () {
            var category = new Category({
                label: req.body.category
            });

            var id = category.save(function (err, newCategory) {
                if (err) {
                    return res.status(500).send(err);
                }
                req.body.categoryId = newCategory._id;
                console.log('catégorie sauvegardée: ' + req.body.category);

                createEvent();
            });
        }

        var createEvent = function () {
            delete req.body.category;
            req.body.organisateur = req.auth.userId;
            req.body.participants = [req.auth.userId];

            new Event(req.body).save(function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }

                console.log('Event ajouté');
            });
        }
    }
};