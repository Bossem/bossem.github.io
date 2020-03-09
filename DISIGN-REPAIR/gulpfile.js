const {src,dest,watch}=require('gulp')
const browserSync=require('browser-sync').create();
const sass=require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer');
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


function ga() {
  return gulp.src('./css')
    .pipe(autoprefixer({
      browsers: ['last 7.0.1 versions']
    }))
    .pipe(gulp.dest('css'));
};

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass",serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};
function serveSass() {
    return src("./sass/*.sass")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};
exports.serve=bs;