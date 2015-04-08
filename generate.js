'use strict';

var path = require('path');
var app = module.exports = require('generate');

app.task('dotfiles', function () {
  app.templates('dotfiles/*')
    .pipe(app.dest(process.cwd()));
});

app.task('normalizer', function () {
  app.templates('normalizer.js')
    .pipe(app.dest(process.cwd()));
});

app.task('plugin', function () {
  app.templates('plugin.js')
    .pipe(app.dest(process.cwd()));
});

app.task('wrapped', function () {
  app.templates('wrapped.js')
    .pipe(app.process())
    .pipe(app.dest(process.cwd()));
});

app.task('default', function () {
  app.templates('*.js')
    .pipe(app.dest(process.cwd()));
});