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
gulp.task('coffee-compile', function() {
  gulp.src('./templates/coffee/**/*.coffee')
	.pipe(coffee({bare: true}))
	.pipe(gulp.dest('./static/js/'))
	.pipe(debug());
});

// task to copy js to js_min if you dont need minify
gulp.task('copy', function () {
	gulp.src('./static/js/**/*.js')
		.pipe(gulp.dest('./static/js_min/'));
});

 
// task to minify the whole thing, this will be loaded at index.html
gulp.task('minify-js', function () {
	gulp.src('./static/js/**/*.js') // path to your files
	.pipe(uglify())
	.pipe(gulp.dest('./static/js_min/'))
	.pipe(debug());
});

 
// watch if you dont want minify
gulp.task('watch', function () {
	gulp.watch(['./templates/coffee/**/*.coffee'], ['coffeeLint', 'coffee-compile'])
	gulp.watch(['./static/js/**/*.js'], ['copy']);
});

// watch_min if you want minify
gulp.task('watch_min', function () {
	gulp.watch(['./templates/coffee/**/*.coffee'], ['coffeeLint', 'coffee-compile'])
	gulp.watch(['./static/js/**/*.js'], ['minify-js']);
});
