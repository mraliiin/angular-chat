'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');

gulp.paths = {
  src: 'src',
  dist: 'dist',
};

gulp.task('default', function() {
    gulp.start('build');
});
