/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
	index: function (req,res) {
		
	},
	ongoing:function (req,res) {
		return res.render('project/ongoing',{});
	},
	completed:function (req,res) {
		return res.render('project/completed',{});
	}
};
