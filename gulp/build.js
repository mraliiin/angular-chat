'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var gulpTemplateCache = require('gulp-angular-templatecache');

gulp.task('templates', function () {
  return gulp.src(gulp.paths.src + '/templates/**/*.html')
        .pipe(minifyHTML({ quotes: true}))
        .pipe(gulpTemplateCache({ module: 'app'}))
        .pipe(gulp.dest(gulp.paths.dist +  '/scripts'));
});

gulp.task('html', function () {
    return gulp.src(gulp.paths.src + '/index.html')
        .pipe(gulp.dest(gulp.paths.dist));
});

gulp.task('js', function() {
    return gulp.src(gulp.paths.src + '/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(gulp.paths.dist));
});

gulp.task('sounds', function () {
  return gulp.src(gulp.paths.src + '/assets/sounds/**/*')
    .pipe(gulp.dest(gulp.paths.dist + '/assets/sounds/'));
});


gulp.task('build', ['templates', 'html', 'sounds', 'js', 'serve']);
