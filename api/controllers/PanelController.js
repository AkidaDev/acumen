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
		 res.render('adminpanel/dashboard',{});
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
							 req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; //TODO: improve with rememeber me
							 return res.render('message',{
								location: '/',
								message: 'login successful'
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
  }
};
