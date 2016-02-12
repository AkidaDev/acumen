/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function (req,res) {
		return res.render('manage/employee');
	},
	detail: function (req,res) {
		return res.render('manage/employee/details');
	}
};
