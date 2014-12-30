var r = require(__dirname + '/server/controllers/access');
module.exports = function(app, passport){
	/*
		sign_up & sign_in should be accessible only to those not already signed in.
	*/
	app.get('/sign_up', function(req, res) {
		res.send('sign up with email and password');
	});
	app.post('/sign_up', passport.authenticate('sign_up', {
		successRedirect: '/home',
		failureRedirect: '/sign_up',
		failureFlash: true
	}));
	app.get('/sign_in', function(req, res) {
		res.send('sign in with valid credentials');
		//res.render('sign_in');
	});
	app.post('/sign_in', passport.authenticate('sign_in', {
		successRedirect: '/home',
		failureRedirect: '/sign_in',
		failureFlash: true
	}));
	app.get('/', function(req, res) {
		if(req.isAuthenticated()) {
			res.redirect('/home');
		} else {
			res.send('index req.user: ' + req.user);
		}
	});
	app.get('/home', function(req, res) {
		if(req.isAuthenticated()) {
			res.send('home authenticated as user: ' + req.user);
		} else {
			res.redirect('/')
		}
		
	});
	//Require auth property for remaining middleware.
	app.get('/sign_out', function(req, res) {
			req.logout();
			res.redirect('/');
	});
	app.put('/thread/:id/:tag', function(req, res) {
		if(req.isAuthenticated) {
			//add the tag to database...
		} else {
			res.redirect('/sign_in');
		}
	});
	app.post('/thread', function(req, res) {
		if(req.isAuthenticated) {
			//add the thread to database...	
		} else {
			res.redirect('/sign_in');
		} 
	});
	app.get('/posts', function(req, res) {
		if(req.isAuthenticated) {
			//retrieve all post belonging to user...
		} else {
			res.redirect('/sign_in');
		}
	});
	app.get('/feed', function(req, res) {
		if(req.isAuthenticated) {
			//retrieve user's feed from db...	
		} else {
			res.redirect('/sign_in');
		}
	});
	app.get('/thread/:id', function(req, res) {
		if(req.isAuthenticated) {
			//get thread w/ id...
		} else {
			res.redirect('/sign_in');
		}
	});
	//Catch 404 
	app.use(function(req, res) {
		res.send('404 not found');
	});
};
