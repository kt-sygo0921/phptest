var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer')

gulp.task('sass', function(){
	return gulp.src('./app/scss/*.scss')
	.pipe(sass({
		outputStyle:'expanded'
	}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./app/css'))
});