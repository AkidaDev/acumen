/**
 * PreferencesController
 *
 * @description :: Server-side logic for managing preferences
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
 index: function (req,res) {
 	if(req.user){
		var u = req.user;
		User.findOne({username: u.username}).exec(function findOneCB(err,user) {
      if(err)
      {
        	return res.send('Err 500');
      }
      return res.render('preferences',{user: user});
		});
	}else{
		return res.redirect('/login');
	}
 }
};
