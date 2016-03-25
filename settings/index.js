module.exports = function (server) {
    var configFile = './config.[env].json'
        .replace('[env]', process.env.NODE_ENV);

    server.settings = require(configFile);
}
