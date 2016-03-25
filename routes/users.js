var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(server){
  router.get('/', server.actions.users.get);

  router.get('/:id', server.actions.users.show);

  router.get('/myevents/:id', server.actions.users.myevents);

  router.post('/',
    bodyparser,
    server.middlewares.ensureBodyFields(['password', 'email']),
    server.actions.users.create
  );

  router.delete('/:id', server.actions.users.remove);
 
  router.put('/:id',
    bodyparser,
    server.actions.users.update
  );

  return router;
};
