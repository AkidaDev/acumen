/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res) {
		if(!req.user)
			return res.redirect('login');
	//  Contact.find({uid: req.user.id}).exec(function (err, contact) {
	//  	// TODO: convert result to json
	//  });
	return res.render('manage/contacts');
	},
};
