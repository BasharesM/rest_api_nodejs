module.exports = function(server){
  return {
    create: require('./create')(server),
    get: require('./get')(server),
    show: require('./show')(server),
    remove: require('./remove')(server),
    update: require('./update')(server),
    myevents: require('./myevents')(server)
  }
};
