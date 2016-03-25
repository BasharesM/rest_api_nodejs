module.exports = function(server){
  return function(req, res, next){

    // get the user id
  var userId = req.params.id;


    // create the query
  var query = server.models.User
      .findById(userId)
      .populate('events')

      // execute the query // get the collection
      query.exec(function(err, user){
      if (err)
          return res.status(401).send('Bad Request : User Does not exists');

          // render the user's events
      res.send(user.events);
      });

  }
}
