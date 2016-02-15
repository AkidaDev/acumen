/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	index: function (req,res) {
		if(!res.user)
			return res.redirect("login");
	},
	ongoing:function (req,res) {
		return res.render('project/ongoing',{});
	},
	completed:function (req,res) {
		return res.render('project/completed',{});
	}
};
