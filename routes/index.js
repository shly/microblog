var express = require('express');
var router = express.Router();
var crypto = require('crypto');
 var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/u/:user', function(req, res, next) {
});
router.get('/post', function(req, res, next) {
 
});
router.get('/reg', function(req, res, next) {
 res.render('reg', { title: 'Express' });
});
router.post('/reg', function(req, res, next) {
	 if (req.body['repassword'] != req.body['password']) {
	 	console.log('两次口令不同');
	 	return res.redirect('/reg');
	 }
	 var md5 = crypto.createHash('md5');
	 var password = md5.update(req.body.password).digest('base64');
	 var newUser = new User({
		 name: req.body.username,
		 password: password,
	 });
	 //检查用户名是否已经存在
	 User.get(newUser.name, function(err, user) {
		 if (user)
		 	 console.log(1);
			 err = 'Username already exists.';
		 if (err) {
			 //req.flash('error', err);
			 console.log(err);
			 return res.redirect('/reg');
		 }
		 //如果不存在则新增用户
		 newUser.save( function(err) {
			 if (err) {
			 		console.log(3);
				// req.flash('error', err);
				 return res.redirect('/reg');
			 }
			 req.session.user = newUser;
			// req.flash('success', ' 注册成功');
			 res.render('index', { user: newUser.name});
		 });
	 });

});
router.get('/login', function(req, res, next) {
 res.render('login', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
 
});
router.get('/logout', function(req, res, next) {
 
});



module.exports = router;
