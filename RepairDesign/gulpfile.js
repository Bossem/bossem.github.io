// const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
// const cleanCSS = require('gulp-clean-css');
// const rename = require("gulp-rename");

// // Static server
// gulp.task('browser-sync', function() {
//   browserSync.init({
//       server: {
//           baseDir: "./"
//       }
//   });
//   gulp.watch("./*.html").on('change', browserSync.reload);
// });

// // Minify and rename CSS files
// gulp.task('mincss', function() {
//   return gulp.src("./css/*.css")  
//   .pipe(rename({suffix: ".min"}))  
//   .pipe(cleanCSS())  
//   .pipe(gulp.dest("./css"));  
// });


const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    },
    browser: 'google chrome',
    notify: false
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./css/**/*.css", minCss);
  watch("./js/*.js").on('change', browserSync.reload);
}





// Sass compile in CSS
function serveSass() {
  return src('./sass/**/*.sass', './src/sass/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest('./**/css'))
      .pipe(browserSync.stream());
};

// Minify and rename CSS files
function minCSS() {
  return src("./css/*.css")  
  .pipe(rename({suffix: ".min"}))  
  .pipe(cleanCSS())  
  .pipe(dest("./css"));  
};

exports.serve = bs;