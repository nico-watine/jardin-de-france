var gulp = require('gulp');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');

gulp.task('default', function () {
	return gulp.src('css/style.css')
		.pipe(uncss({
			ignore: ['.js-nav-active .mask'],
			html: ['http://nicos-16-mbp.local:5757']
		}))
		.pipe(nano())
		.pipe(gulp.dest('./css/opt'));
});
