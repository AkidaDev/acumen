/**
 * TaskController
 *
 * @description :: Server-side logic for managing tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		var fs = require('fs');
		var data = fs.readFileSync('data/country.csv')
		console.log(data);
		return res.ok();
	}
};
