'use strict';

var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpAutoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function () {
  return gulp.src(gulp.paths.src + '/assets/styles/**/*.scss')
      .pipe(gulpSass({outputStyle: 'expanded'}).on('error', gulpSass.logError))
      .pipe(minifyCSS({compatibility: 'ie8', keepBreaks:false}))
      .pipe(gulpAutoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(gulp.paths.dist +  '/css'));
});
