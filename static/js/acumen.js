  var socket =  io.connect();
  io.socket.get("/chat/subscribe/56bdb52a36e8932026032dcc");
  io.socket.on('chatroom',function (event) {
    console.log(event);
  })
  io.socket.on('chat', function (event){
    //update, remove user from chat window
    data = event.data;
    console.log(data);
    $("#messages").append(data.message + '<br>');
  });
  $("#chatsend").click(function() {
  console.log('inside chat send event');
  var parentid = '#'+$(this).closest('form').attr('id');
  var url ='/chat/56bdb52a36e8932026032dcc';//+ parentid;
  if (socket.connected) {
    io.socket.post(url,{message: $(parentid).find('input[name="Chat[message]"]').val()});
  }
});
