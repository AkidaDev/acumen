/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index:function (req,res) {
		return res.render('manage/clients');
	},
	detail: function (req,res) {
		return res.render('manage/clients/details');
	},
	add: function (req,res) {
		return res.render('manage/clients/add');
	},
};
