var proxyPath = '/api';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});
  var path = require('path');

  app.use(proxyPath, function(req, res, next){
    // include root path in proxied request
    req.url = path.join(proxyPath, req.url);
    proxy.web(req, res, { target: 'http://localhost:3000/api' });
  });
};
