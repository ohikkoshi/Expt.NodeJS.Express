var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { user : req.user });
});

// ----------------------------------------------------------------------------
// 認証.
// ----------------------------------------------------------------------------
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate(
	'local', 
    {
		successRedirect: '/',
    	failureRedirect: '/login',
		session: true
	}
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
// ----------------------------------------------------------------------------

module.exports = router;
