var express = require('express');
var passport = require('passport');
var router = express.Router();
var LocalStrategy=require('passport-local').Strategy;
var connectflash=require('connect-flash');


var user = require('../models/userinform');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});


router.post('/login',
passport.authenticate('local', { failureRedirect: '/Login' }),
function(req, res) {
res.send('welcome to login');
});



//localhost:8081/users/userauthentication

router.post('/userauthentication', function(req, res) {

	var username = req.body.test;
	var password = req.body.test2;
	console.log(username);
	console.log(password);



	res.send("Username is "+username+"and password is"+password);

});


router.post('/addtodb',function(req,res,next){
	if(req.body){
		var userinfo = new user();
		userinfo.username=req.body.username;
		userinfo.password=req.body.password;

		userinfo.save(function(err){


			if(err){
				console.log("not inserted");
				res.send('not inserted');
			}
			else{
				console.log("inserted");
				res.send('inserted');
			}
		});

	}else{
		console.log("no data found");
	}

});







module.exports = router;
