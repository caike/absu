var through = require('through');
var http = require('http');

function fetch(url) {

  var stream = through();

  http.get(url, function(res) {
    res.pipe(stream);
  }).on('error', function(e) {
    throw 'error: ' + e;
  });

  return stream;
};

module.exports = fetch;
