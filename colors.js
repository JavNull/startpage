$("#search-input").keyup(function(e) {
  abc = document.getElementById("search-input").value;

  if (abc.match(/youtube/g)) {
    $("body").css("background-color", "rgb(205, 32, 31)");
  } else if (abc.match(/twitter/g)) {
    $("body").css("background-color", "rgb(27, 122, 183)");
  } else if (abc.match(/reddit/g)) {
    $("body").css("background-color", "rgb(255, 70, 2)");
  } else if (abc.match(/twitch/g)) {
    $("body").css("background-color", "rgb(88, 60, 145)");
  } else {
    $("body").css("background-color", "rgb(14, 14, 14)");
  }
})
