// including plugins
// read more> https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/
var gulp = require('gulp')
, debug = require('gulp-debug')
, coffeelint = require("gulp-coffeelint")
, coffee = require("gulp-coffee")
, uglify = require("gulp-uglify");
 
// task to syntaxcheck CoffeLint
gulp.task('coffeeLint', function () {
    gulp.src('templates/coffee/**/*.coffee') // path to your files
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(debug());
});


// task to compile coffee to js
// rename dest from js_min to js for real minify
gulp.task('coffee-compile', function() {
  gulp.src('templates/coffee/**/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./static/js_min/'))
    .pipe(debug());
});

 
// task to minify the whole thing, this will be loaded at index.html
// rename target from js_min_real to js_min if you REALLY want minify. 
gulp.task('minify-js', function () {
    gulp.src('templates/js/**/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('./static/js_min_real/'))
    .pipe(debug());
});

 
// watch
gulp.task('watch', function () {
    gulp.watch(['templates/coffee/**/*.coffee'], ['coffeeLint', 'coffee-compile'])
    gulp.watch(['templates/js/**/*.js'], ['minify-js']);
});
