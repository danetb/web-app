var r = require(__dirname + '/../server/controllers/access');
module.exports = function(app){
	/*
		sign_up & sign_in should be accessible only to those not already signed in.
	*/
	app.get('/sign_up', function(req, res) {
		res.render('sign_up');
	});
	app.post('/sign_up', function(req, res) {
		var email = req.body.email;
		var password = req.body.password;
		r.sign_up(email,password, function(err) {
			if(err)
		});
	});
	app.get('/sign_in', function(req, res) {
		res.render('sign_in');
	});
	app.post('/sign_in', function(req, res) {
		var auth = r.authenticate(req.body.username, req.body.password);
		req.session.auth = auth;
	});

	//Require auth property for remaining middleware.
	app.use(function(req, res, next) {
		if(req.session.auth) {
			next();
		}
	});
	app.get('/sign_out', function(req, res)r.s);
	app.put('/thread/:id/:tag', r.tag_comment);
	app.post('/thread', r.create_thread);
	app.get('/posts', r.get_user_posts);
	app.get('/feed', r.get_user_feed);
	app.get('/thread/:id', r.get_thread);
};
