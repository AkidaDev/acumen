$(function () {
	/* ADDING EVENTS */
      var currColor = "#3c8dbc"; //Red by default
      //Color chooser button
      var colorChooser = $("#color-chooser-btn");
      $("#color-chooser > li > a").click(function (e) {
        e.preventDefault();
        //Save color
        currColor = $(this).css("color");
        //Add color effect to button
        $('#add-new-event').css({"background-color": currColor, "border-color": currColor});
      });
      $("#add-new-event").click(function (e) {
        e.preventDefault();
        //Get value and make sure it is not null
        var val = $("#new-event").val();
        if (val.length == 0) {
          return;
        }

        //Create events
        var event = $("<span />");
        event.css({"background-color": currColor, "color": "#fff", "font-size": "14px", "display": "inline-block"}).addClass("label margin-r-5");
	      val += '<span class="btn-xs" data-widget="removelabel" style="margin-left:5px"><i class="fa fa-times-circle"></i></span>';
        event.html(val);
        $('#external-events').prepend(event);

        //Remove event from text input
        $("#new-event").val("");
	  $('[data-widget="removelabel"]').click(function(){
		var events = $(this).parent();
		events.remove();
	  });
  });
});
