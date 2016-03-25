module.exports = function (server) {

	return function (req, res, next) {
		var Event = server.models.Event;
		var query = Event.findOne({
			_id: req.params.id
		})
		.populate('participants');

		query.exec(function (err, data) {
			if (err) {
				return res.status(500).send(err);
			}
			console.log(data.participants);

			res.send(data.participants);
		});
	};
}