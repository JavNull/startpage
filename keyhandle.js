$("body").keydown(function(e) {

  if (e.keyCode == 27) {
    $("body").css("background-color", "rgb(24, 24, 29)");
    $("#search-input").val('');
    $('#search-input').hide();
    $("#clock").show();
  } else if (e.keyCode == 91 || e.keyCode == 18 ||
    e.keyCode == 17 || e.keyCode == 225 || e.keyCode == 8) {
      return;
  } else {
    $("#clock").hide();
    $('#search-input').show();
    $("#search-input").focus();
  }

});

