var sha1 = require('sha1');

module.exports = function(server){
  return function(req, res, next){
    req.body.password = sha1(req.body.password);

    var User = server.models.User;
    console.log(req.body);
    var user = new User(req.body);
    user.save(function(err, data){
        if (err)
          return res.status(500).send(err);
        res.send(data);
      });
  };
}
