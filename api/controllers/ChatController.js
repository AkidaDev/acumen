/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		return res.render('test/test');
	},
	subscribe: function (req,res) {
		console.log('inside subscribe');
		Chatroom.findOne({
        id: req.param('roomid')
      }).exec(function(err, chatroom) {
        if (err)
          return res.send(500);
        if (chatroom === [] || typeof chatroom === 'undefined')
          res.send(404, "Chatroom not found");
        if (!chatroom.hasUser(req.user.id))
          return res.send(403);
					console.log(req.user.username +" suscribe " + chatroom.name);
					Chatroom.subscribe(req, chatroom.id);
        });
	},
	//this is test
	test: function (req,res) {
		console.log("inside test");
		Chatroom.findOne({
				id: '56bdb52a36e8932026032dcc'
			}).exec(function(err, chatroom) {
				if(err)
				  console.log(err);
					console.log("chatrrom id" + chatroom.id);
					Chatroom.message(chatroom.id, {count: 12, hairColor: 'red'});
					return res.ok();
				});
	}
};
