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
                new Category({
                    label: req.body.category
                }).save(function (err, data) {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    console.log('catégorie sauvegardée: ' + req.body.category);
                });
            }

            delete req.body.category;
            req.body.categoryId = data._id;
            req.body.organisateur = req.auth.userId;
            req.body.participants = [req.auth.userId];

            new Event(req.body).save(function (err, data) {
                if (err) {
                    return res.status(500).send(err);
                }

                console.log('Event ajouté');
            });


        });

        //event.save(function (err, data) {
        //    if (err) {
        //        return res.status(500).send(err);
        //    }
        //
        //    res.send(data);
        //})
    }
};