'use strict';

var express = require('express'),
  app = express();

  app.set('views',  '/views');
  app.set('view engine', 'jade');

  app.get('/', function (req, res) {
    res.render('home', {});
  });
  app.set('port', 8080);
  app.listen(app.get('port'));
  console.log('Magic happens on port', app.get('port'));
  module.exports.getApp = app;