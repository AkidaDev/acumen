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
		req.file('Contact[pimage]').upload({dirname: require('path').resolve(sails.config.appPath + '/assets/images')},function (err, uploadedFiles) {
			if(err)
			 console.log('error');
			 if (uploadedFiles.length === 0)
      	return res.badRequest('No file was uploaded');
			else{
				User.update(req.session.me, {
		 // Generate a unique URL where the avatar can be downloaded.
		 avatarUrl: require('util').format('%s/user/avatar/%s', sails.getBaseUrl(),req.user.username+'_'+config.user.avatar.width+'X'+config.user.avatar.height),

		 // Grab the first file and use it's `fd` (file descriptor)
		 avatarFd: uploadedFiles[0].fd
	 })
	 .exec(function (err){
		 if (err) return res.negotiate(err);
		 return res.ok();
	 });
				}
		});
 }
};
