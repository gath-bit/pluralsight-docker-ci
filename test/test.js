'use strict';

var request = require('request'),
  app = require('../app').getApp;

describe('GET /', function () {
  it('expects HTTP response of 200', function (done) {
    request(app).get('/').expect(200, done);
  });
});
