/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
			return res.render('test/chattest', {
		          roomid: '56bdb52a36e8932026032dcc'//chatroom.id
		        });
	},
	subscribe: function (req,res) {
		console.log('inside subscribe');
		Chatroom.findOne({
        id: req.param('roomid')
      }).exec(function(err, chatroom) {
        if (err)
          return res.send(500);
        if (chatroom === [] || typeof chatroom === 'undefined')
          return res.send(404, "Chatroom not found");
        if (!chatroom.hasUser(req.user.id))
          return res.send(403);
					console.log(req.user.username +" subscribe " + chatroom.name);
					Chat.findOne({chatRoomID: chatroom.id}).exec(function (err, chat) {
						Chatroom.subscribe(req, chatroom.id);
						Chat.subscribe(req,chat.id);
					});
        });
			return res.ok();
	},
	//this is test
	test: function (req,res) {
		console.log("inside test");
	  var body = req.body;
		console.log(req.body);
		if(typeof body.message === 'undefined' || body.message === [])
		 return res.send(403);
		Chatroom.findOne({
				id: '56bdb52a36e8932026032dcc' // req.param('roomid') // update when doing multichat
			}).exec(function(err, chatroom) {
				if(err){
				  console.log(err);
					return res.send(403);
				}
					console.log("chatroom id" + chatroom.id);
					Chat.findOne({chatRoomID: chatroom.id}).exec(function (err, chat) {
						//TODO: Add secury layer for html or cross site scripting
						console.log(body);
						var message =  {
						 	user : req.user.id,
							body : body.message,
						}
						console.log(chat.id);
						console.log(chatroom.id);
						Chat.update({id: chat.id},{message: message}).exec(function (err, updated) {

							if(err)
							{
								console.log(err);
								return res.send(500);
							}
							console.log(updated);
								Chat.message(chat.id, {message: body.message, user: req.user.username});
								return res.ok();
							});
					});
				});
	},
};
