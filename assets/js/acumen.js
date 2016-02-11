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
$("#chatsend").click(function () {

});
