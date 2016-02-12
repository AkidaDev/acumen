$(document).ready(function() {
  console.log("Loading Acumen!");
  $('#createroom').click(function() {
    $.ajax({
      type: "post",
      url: '/chat/createroom',
      data: $('#createroomform').serialize(),
    }).done(function() {
      alert('done');
    }).fail(function(data) {
      console.log(data.responseText);
    });
  });
  var socket = io.connect();
  io.socket.on('skill', function onServerSentEvent(msg) {
    if(typeof msg !== 'undefined' || msg !== []){
      $('#messages').html.value += msg;
      console.log("skill created");
    }
  });
  $("#chatsend").click(function() {
    console.log('inside chat send event');
    var parentid = $(this).closest('form').attr('id');
    var url ='/chat/join/'+ parentid;
    console.log(url);
    console.log($('#chatform').serialize());
    if (socket.connected) {
      console.log('inside connect');
      io.socket.post(url,{message: $(parentid).serialize()},function(resData, jwres) {
      });
    }
  });
});
