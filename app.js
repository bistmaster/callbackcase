// module.exports = function() {
	var express  =  require('express');
	var app = express();	
	var multer  = require('multer');
	var router = require('./rest/router.js');

	app.use(require('connect-livereload')());
	app.use(express.static(__dirname));
	app.use(multer({ dest: './uploads/'}))
	
	app.engine('html', require('ejs').renderFile);
	app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views
	
	router(app); // call the router module where the routes are set.
	
	app.listen(3100); // express server
	console.log("Server running at http://localhost:3100/");	
// }