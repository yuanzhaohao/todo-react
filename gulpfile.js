var gulp = require('gulp');
var code = require('gulp-code');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var open = require('gulp-open');

gulp.task('connect', function () {
  return connect.server({
    root: ['./'],
    livereload: true,
    port: '3000'
  });
});
gulp.task('open', function () {
  return gulp.src('index.html').pipe(open('', { url: 'http://localhost:3000/index.html'}));
});

gulp.task('default', ['connect', 'open']);
