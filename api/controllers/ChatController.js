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
  index: function(req, res) {
    return res.render('test');
  },
  test: function(req, res) {
    var chat  = {
      user: ["user1","user2","user3"],
      message: [{u_id:"someid",time:"sometime",message:"somemessage"},{u_id:"someid",time:"sometime",message:"somemessage"}],
    };
    res.send(JSON.stringify(chat));
  },
  createRoom: function (req,res) {
    //TODO: add security layer here
    var name = req.param("name");
    if(!name)
      return res.json(500,{message:"invalid name"});
    Chatroom.create({name:name},function (room) {}
      //TODO: add complex room structure eg: room assing to group of users or a project or a team
    );
  },
  getRooms: function(req, res) {
    res.json(sails.sockets.rooms());
  },
  joinRoom: function (req,res) {
    if(!req.isSocket)
      return res.send("Error!! :() only websockets allowed");
    var roomname = req.param('room');
    Chatroom.findOne({name:roomname}).exec(function(err,room){
      if(err || !room)
        return res.send('room not found or Deleted!!!')
      Chatroom.subscribe(req,_.pluck(room,'id'));
      res.ok();
    });
  }
};
