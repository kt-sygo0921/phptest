var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequance = require('run-sequence');
var connect = require('gulp-connect-php');
var os = require('os');

gulp.task('watch', function(){
	var ostype = os.type().toString();
	if(ostype.match('Windows')) {
		var phpbin = 'C:/php/php.exe';
		var phpini = 'C:/php/php.ini';
		console.log('windowsだよ');
	}else {
		var phpbin ='/usr/local/opt/php70/bin/php';
		var phpini = '';
		console.log('macだよ');
	}
	connect.server({
		port:8001,
		base:'./app/wordpress/',
		bin: phpbin,
		ini: phpini
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
