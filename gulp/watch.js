'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles', 'templates'], function () {
  gulp.watch(['./src/**/*.js'], ['serve-reload']);
  gulp.watch(['./src/**/*.html'], ['templates-reload']);
  gulp.watch(['./src/**/*.scss'], ['sass-reload']);
});
