/**
 * serveIndex is not included by default. Be sure to run
 * `npm install --save-dev serve-index`
 * before uncommenting related lines below.
 *
 * serveIndex automatically creates an overview of files in the server
 * diretory, if no index.html is present.
 */
var
	gulp = require('gulp'),
	connect = require('connect'),
	connectLR = require('connect-livereload'),
	serveStatic = require('serve-static'),
	// serveIndex = requrie('serve-index'),
	http = require('http'),
	gulpLR = require('gulp-livereload');


var opts = {
	server_dir: './src',
	server_port: 3000,
	livereload_port: 35729
};


// Static serve up files
gulp.task('serve', function() {
	var server = connect()
		.use(connectLR()) // No browser plugin needed
		.use(serveStatic(opts.server_dir));
		// .use(serveIndex(opts.server_dir));

	http.createServer(server).listen(opts.server_port);
});


// Default task = dev
gulp.task('default', ['serve'], function() {
	gulpLR.listen();
	gulp.watch('src/**/*').on('change', gulpLR.changed);
});
