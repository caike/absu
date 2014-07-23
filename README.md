# Absu

A wrapper for Node's [http.request](http://nodejs.org/api/http.html#http_http_request_options_callback) which exposes a streaming API.

## Installation

`npm install absu`

## Example

Simple example using Node's repl:

```javascript
var absu = require('absu');
absu('http://www.google.com').pipe(process.stdout)
```
