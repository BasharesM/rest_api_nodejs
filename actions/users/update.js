module.exports = function(server){
  return function(req, res, next){
    delete req.body.password;
    delete req.body.activated;

    var User = server.models.User;
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, data){
      if (err)
        return res.status(500).send(err);
      res.send(data);
    })
  }
};
