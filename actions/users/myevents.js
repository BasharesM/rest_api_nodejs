module.exports = function(server){
  return function(req, res, next){

  var userId = req.params.id;

  var user = server.models.User
      .findById(userId)
      .populate('events')

/*Tentative en attaquant la table */
  var allEvents = server.models.Event
      .find()

  var eventsOfUser = [];

  allEvents.forEach(function(event, index, array){
    console.log(event);
  }
);


      //console.log(events);

      user.exec(function(err, data){
        if (err)
          return res.status(401).send('Bad Request : User Does not exists');
        res.send(data.events);
      });

  }
}
