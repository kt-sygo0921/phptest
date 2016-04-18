var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequance = require('run-sequence');
var connect = require('gulp-connect-php');

gulp.task('watch', function(){
	var ostype = os.type().toString();
	if(ostype.match('Windows')) {
		var phpbin = 'C:/php/php.exe';
		var phpini = 'C:/php/php.ini';
	}else {
		var phpbin ='';
		var phpini = ''
	}
	connect.server({
		port:8001,
		base:'./app/wordpress/',
		bin: 'C:/php/php.exe',
		ini: 'C:/php/php.ini'
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
