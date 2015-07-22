var gulp = require('gulp');
var browserify = require('browserify');
var shim = require('browserify-shim');
var source = require('vinyl-source-stream');
var code = require('gulp-code');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var react = require('gulp-react');
var open = require('gulp-open');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('js', function () {
  var bundler = browserify({
    entries: ['./src/app.js'],
    transform: [reactify],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  return bundler
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('demo'));
});

gulp.task('connect', function () {
  return connect.server({
    root: ['./demo'],
    livereload: true,
    port: '3333'
  });
});

gulp.task('open', function () {
  return gulp.src('./demo/index.html').pipe(open('', { url: 'http://localhost:3333'}));
});

gulp.task('watch', function () {
  gulp.watch(['src/**/*.js'], ['js']);
});

gulp.task('default', ['js']);
gulp.task('server', ['connect', 'watch', 'open']);
