$(function() {
  //Initialize Select2 Elements
  $(".select2").select2();

  //Datemask dd/mm/yyyy
  $("#datemask").inputmask("dd/mm/yyyy", {
    "placeholder": "dd/mm/yyyy"
  });

  //phone mask
  $("[data-mask]").inputmask();

});
