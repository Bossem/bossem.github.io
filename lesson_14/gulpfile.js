const gulp = require('gulp');
const browserSync =require('browser-sync').create();
gulp.task('hello', function(done) {
	console.log('Привет,мир!');
	done();
});


// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	gulp.watch("./*.html").on('change', browserSync.reload);
});

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
});
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
  return gulp.src('styles/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist'));
});

