'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('templates-reload', ['templates'], function() {
    browserSync.reload();
});

gulp.task('sass-reload', ['styles'], function() {
    browserSync.reload();
});

gulp.task('serve-reload', ['js'], function() {
    browserSync.reload();
});

gulp.task('serve', ['watch'], function() {
    browserSync.init({
        startPath: '/index.html',
        server: {
            baseDir: './' + gulp.paths.dist,
            routes: {
                '/bower_components': 'bower_components',
                '/src': 'src'
            }
        }
    });
});
