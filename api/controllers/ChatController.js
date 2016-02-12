/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * chat/<roomname>/
 */
module.exports = {
  /**
   * `ChatController.index()`
   */
  index: function(req, res) {
    if (!req.user)
      return res.redirect('/login');
    return res.render('chat');
  },
  chat: function(req, res) {
    if (req.user) {
      Chatroom.findOne({
        id: req.param('roomid')
      }).exec(function(err, chatroom) {
        if (err)
          return res.send(500);
        if (chatroom === [] || typeof chatroom === 'undefined')
          res.send(404, "Chatroom not found");
        if (!chatroom.hasUser(req.user.id))
          return res.send(403);
        return res.render('test/chattest', {
          roomid: chatroom.id
        });
      });
    } else {
      return res.redirect('/login');
    }
  },
  createRoom: function(req, res) {
    if (req.user) {
      var room = req.param('Room');
      var user = User.findOne({
        username: req.user.username
      }).exec(function(err, user) {
        var chatroom = {};
        chatroom.name = room.roomname;
        chatroom.private = Boolean(room.private);
        chatroom.createdBy = user.id;
        chatroom.users = [user.id];
        Chatroom.create(chatroom).exec(function(err, chatroom) {
          if (err) {
            return res.status(500).send(err);
          }
          if (typeof chatroom !== 'undefined' && chatroom !== []) {
            var chat = {};
            chat.chatRoomID = chatroom.id;
            Chat.create(chat).exec(function(err, chat) {
              if (err) {
                console.log(err);
                Chatroom.destroy({
                  id: chatroom.id
                }).exec(function(err, chatroom) {
                  console.log(err);
                  return res.status(500).send(err);
                });
              } else {
                res.status(200).send("room created");
              }
            });
          } else {
            return res.status(500).send("Error: Chat room could not be created");
          }
        });
      });
    } else {
      res.redirect('/login');
    }
  },
//join Room auth Connect client to broadcasting room
  joinRoom: function(req, res) {
  if (!req.isSocket){
      res.send(403, 'Not a socket');
    }
    console.log('inside joinroom');
      Chatroom.findOne({
        id: req.param('roomid')
      }).exec(function(err, chatroom) {
        if (err)
          return res.send(500);
        if (chatroom === [] || typeof chatroom === 'undefined')
          res.send(404, "Chatroom not found");
        if (!chatroom.hasUser(req.user.id))
          return res.send(403);
        console.log("Just before socket join");
        sails.sockets.join(req, chatroom.id, function(err) {
          console.log('Error: ' + err);
          if (err) {
            return res.serverError(err);
          }
          console.log('message:' + req.user.username + 'has join room');
          console.log("roomid: " + chatroom.id);
          console.log("roomid: " + chatroom.name);
        });
        return res.render('test/chattest', {
          roomid: chatroom.id
        });
      });
  },
  getRooms: function(req, res) {},
};
