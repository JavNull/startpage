$("#search-input").keyup(function(e) {
  abc = document.getElementById("search-input").value;

  if (abc.match(/youtube/g)) {
    $("body").css("background-image", "linear-gradient(to right, rgb(205, 32, 31), rgb(112, 16, 16))");
  } else if (abc.match(/twitter/g)) {
    $("body").css("background-image", "linear-gradient(to right, rgb(27, 122, 183), rgb(11, 54, 80))");
  } else if (abc.match(/reddit/g)) {
    $("body").css("background-image", "linear-gradient(to right, rgb(255, 70, 2), rgb(156, 42, 0))");
  } else if (abc.match(/twitch/g)) {
    $("body").css("background-image", "linear-gradient(to right, rgb(88, 60, 145), rgb(54, 37, 88))");
  } else {
    $("body").css("background-color", "rgb(29,31,33)");
    $("body").css("background-image", "none");
  }
})
