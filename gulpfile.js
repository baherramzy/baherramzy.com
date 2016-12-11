// Gulp
var gulp = require('gulp'),
	// Gulp plugins
	minifyCss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	promise = require('es6-promise').polyfill();

gulp.task('styles', function() {
	return gulp.src(['./sass/**/*.scss'])
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('./'))
});

gulp.task('scripts', function() {
	return gulp.src(['./js/scripts.js', './js/bootstrap.js'])
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%- error.message %>')
		}))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('./js/scripts.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);