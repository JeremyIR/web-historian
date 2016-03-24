var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
// require more modules/folders here!

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10
};

exports.handleRequest = function (req, res) {

  var headers = defaultCorsHeaders;

  if (req.method === 'GET') {
    var insides = fs.readFileSync(__dirname + '/public/index.html', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
    var statusCode = 200;
    res.writeHead(statusCode, headers);
    res.end(insides);
  }
};
