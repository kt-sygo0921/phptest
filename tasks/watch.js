var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequance = require('run-sequence');
var connect = require('gulp-connect-php');

gulp.task('watch', function(){
	connect.server({
		port:8001,
		base:'./app/',
		bin: 'C:/xampp/php/php.exe',
		ini: 'C:/xampp/php/php.ini'
	},function(){
		browserSync({
			baseDir:'./app/',
 			directory: true,
 			proxy: '127.0.0.1:8001'
		});
	});
	gulp.watch(['./app/scss/**/*.scss'], function(){
		runSequance(['sass'], browserSync.reload)
	})
	gulp.watch('./app/ejs/**/*.ejs', function(){
		runSequance(['ejs'], browserSync.reload)
	})
});







// gulp.task('watch',function(){
// 	browserSync({
// 		server:{
// 			baseDir:'./app/',
// 			directory: true
// 		}
// 	});
//});