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
    return res.render('test');
  },
  test: function(req, res) {
    var chat = {
      user: ["user1", "user2", "user3"],
      message: [{
        u_id: "someid",
        time: "sometime",
        message: "somemessage"
      }, {
        u_id: "someid",
        time: "sometime",
        message: "somemessage"
      }],
    };
    console.log("i was here berfore chat creatae");
    Chat.create(chat).exec(function createCB(err, chat) {
      if (err) {
        console.log("Err creating  Chat")
        return res.send(err);
      }
      return res.send("Chat object created" + chat.chatID);
    });
  },
  //create room through ajax request
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
        console.log(chatroom);
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
  getRooms: function(req, res) {},
  joinRoom: function(req, res) {
    if (!req.isSocket)
      return res.send("Error!! :() only websockets allowed");
    var roomname = req.param('room');
    Chatroom.findOne({
      name: roomname
    }).exec(function(err, room) {
      if (err || !room)
        return res.send('room not found or Deleted!!!')
      Chatroom.subscribe(req, _.pluck(room, 'id'));
      res.ok();
    });
  }
};
