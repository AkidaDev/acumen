/**
 * PanelController
 *
 * @description :: Server-side logic for managing panels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
  /**
   * `PanelController.login()`
   */
	 index: function(req,res){
		 res.render('dashboard',{});
	 },
  login: function (req, res) {
		if(!req.user)
		{
			if(req.body)
			{
				console.log('inside body') //TODO:remove me for production
				passport.authenticate('local', function(err, user, info) {
					if ((err) || (!user)) {
						return res.render('/panel/login',{ err: "err"});
						res.send(err);
					}
					req.logIn(user, function(err) {
						if (err) res.render('/panel/login',{ err: "err"});
						else{
							var hour = 30 * 24 * 60 * 60 * 1000;
							 req.session.cookie.expires = new Date(Date.now() + hour);
							 req.session.cookie.maxAge = hour ; //TODO: improve with rememeber me
							 req.session.save(function (err) {
							 	if(err)
									{
										return res.send(err); // todo remove it fror future reference
									}
									return res.render('message',{
	 								location: '/',
	 								message: 'login successful'
	 							});
							 });
					}
					});
				})(req, res);
			}else {
				res.render('site/login');
			}
		}else{
			res.redirect('/panel');
		}
  },
  /**
   * `PanelController.register()`
   */
  register: function (req, res) {
		if(!req.user)
		{
			if(req.body)
			{
				var qs = require('qs');
				var data = qs.parse(req.body);
				if(data.Register.password == data.Register.repassword)
				{
					delete data.Register.repassword;
					User.create(data.Register,function (err,user) {
						if(err)
						{
							// TODO: complete error handing of fail register
							console.log(err);
						}else {
							res.render("message",{location:"/login",message:"Account create, Please Login to proceed"});
						}
					});
				}else{
					error.password = "Password and Confirm Password do not match"
					res.render('site/register',{});
				}
			}else	res.render('site/register',{});
		}else{
			res.redirect('/panel');
		}
  },
  /**
   * `PanelController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },
	generate: function (req,res) {
		console.log("here");
		var users = {
			1: {
				username: "mercer",
				fname:"mercer",
				lname:"mercer",
				password: "000",
				email: "demo@botsolve.com",
				role: 'admin',
				country: 'India',
				state: "Delhi",
				city: "New Delhi",
				dob: '12/12/2014',
				phoneno: "999000xxxx",
			},
			2: {
				username: "pankaj",
				password: "000",
				fname:"pankaj",
				lname:"chauhan",
				email: "pankaj@botsolve.com",
				role: 'Software Engineer',
				country: 'India',
				state: "Delhi",
				city: "New Delhi",
				dob: '12/12/2015',
				phoneno: "99900xxxxx",
			},
			3: {
				username: "Alishan",
				fname: "Alishan",
				lname: "Khan",
				password: "000",
				email: "alishan@botsolve.com",
				role: 'Software Engineer',
				country: 'India',
				state: "Delhi",
				city: "New Delhi",
				dob: '12/12/2014',
				phoneno: "999000xxxx",
			},
			4: {
				username: "Ataullah",
				password: "000",
				fname: "Ataullah",
				lname: "Khan",
				email: "ataullah@botsolve.com",
				role: 'manager',
				country: 'India',
				state: "Delhi",
				city: "New Delhi",
				dob: '12/12/2014',
				phoneno: "999000xxxw",
			},
		};
		console.log(users);
		for(var i = 1; i <=4; i++)
			{
				User.create(users[i]).exec(function createDB(err,created){
					if(err)
					 console.log(err);
					else
						console.log(created);
				});
			}
	}
};
