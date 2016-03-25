module.exports = function (server) {

	return function (req, res, next) {
		var Event = server.models.Event;

		var paramSearch =		req.params.param;
		var query = Event.find();
		var today = new Date();
		var params = {};

		console.log(paramSearch);

		if( paramSearch == 'before') {
			console.log("\n->>>> PASSER ");
			var query = Event.find({
				"date" : {
					$lt: today
				}
			});
		}
		else if ( paramSearch == 'after' ) {
			console.log("\n->>>> FUTUR ");

			var query = Event.find({
				"date" : {
					$gte: today
				}
			});
		}
		else {
			var err = 'Paramêtre incorrect';
			return res.status(500).send(err);
		}


		query.exec(function (err, data) {
			if (err) {
				return res.status(500).send(err);
			}
			res.send(data);
		});

	};
}