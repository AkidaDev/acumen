/**
 * PreferencesController
 *
 * @description :: Server-side logic for managing preferences
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
 index: function (req,res) {
	var u = req.user;
		User.findOne({username: u.username}).exec(function findOneCB(err,user) {
      if(err)
      {
        	return res.send('Err 500');
      }
      return res.render('preferences',{user: user});
		});
 },
 submit: function (req, res) {
   if(! req.body)
    return res.send(403)

    // IMAGE CODE
//    avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(),req.user.username+'_'+sails.acumen.avatar_width+'X'+sails.acumen.avatar_height),
    // Grab the first file and use it's `fd` (file descriptor)
//    avatarFd: uploadedFiles[0].fd

 }
};
