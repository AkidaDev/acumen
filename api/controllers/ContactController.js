/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res) {

	return res.render('manage/contacts');
	},
 add: function (req,res) {
	
	return res.render('manage/contacts/add/');
 }
};
