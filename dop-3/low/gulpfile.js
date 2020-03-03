const gulp = require('gulp');
const browserSync = require('browser-sync').create();
gulp.task('hello', function (done) {
	console.log('Привет,мир!');
	done();
});
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("app/scss/*.scss", ['sass']);
	gulp.watch("./*.html").on('change', browserSync.reload);


});



gulp.task('sass', function () {

	return sass('app/scss', {
			sourcemap: true
		})
		.on('error', function (err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write('./', {
			includeContent: false,
			sourceRoot: '/app/scss'
		}))
		.pipe(browserSync.stream({
			match: '**/*.css'
		}));
});
var path = {
		build: {
			css: "dist/"
		},
		src: {
			css: "src/style.scss",
		}

		
			
			
				}
				.pipe(sass())
				.pipe(autoprefixer({
					Browserslist: ['last 8 versions'],
					cascade: true
				}))
				.pipe(cssbeautify())
				.pipe(dest(path.build.css))
				.pipe(cssnano({
					zindex: false,
					discardComments: {
						removeAll: true
					}
				}))
				.pipe(removeComments())
				.pipe(rename({
					suffix: ".min",
					extname: ".css"
				}))
				.pipe(dest(path.build.css))
	
		exports.css = css;
		var sass = require('gulp-sass');
		gulp.task('default', function () {
			return gulp.src('./src/sass/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest('./design/okay_shop/css'));
	});
	sourcemaps = require('gulp-sourcemaps');
	var gulp = require('gulp'),
    sass = require('gulp-sass');
gulp.task('default', function () {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./design/okay_shop/css'));
});
pipe(sass().on('error', sass.logError))
.ipe(sourcemaps.write('.'))
concat = require('gulp-concat');
