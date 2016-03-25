module.exports = function(server){
  return function(req, res, next){

    var userId = req.params.id;
    //res.send(userId);


  var user = server.models.User
      .findById(userId)
      .populate('events')

      user.exec(function(err, data){
        if (err)
          return res.status(401).send('Bad Request : User Does not exists');
        res.send(data.events);
      });

  }
}
