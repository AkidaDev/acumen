/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  /**
   * `ChatController.index()`
   */
  index: function (req, res) {
    return res.render('test');
  },
  test: function (req,res) {
    sails.sockets.broadcast('message', { msg: 'Hi there!' });
  //  res.render('te')
  }
};
