  var socket =  io.connect();
  io.socket.get("/chat/subscribe/56bdb52a36e8932026032dcc");
  io.socket.on('chatroom', function (event){
    console.log(event);
  });
