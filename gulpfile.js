// read more> https://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/
// including plugins
var gulp = require('gulp')
, coffee = require("gulp-coffee")
, coffeelint = require("gulp-coffeelint")
, uglify = require("gulp-uglify");
 
// task
gulp.task('coffeeLint', function () {
    gulp.src('./templates/coffee/*.coffee') // path to your files
    .pipe(coffeelint())
    .pipe(coffeelint.reporter());
});


// task 
gulp.task('coffee-compile', function() {
  gulp.src('./templates/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./templates/js/'));
});

 
// task
gulp.task('minify-js', function () {
    gulp.src('./templates/js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('./static/js/'));
});

 
// watch
gulp.task('watch', function () {
    gulp.watch(['./templates/coffee/*.coffee'], ['coffeeLint', 'coffee-compile', 'minify-js']);
});