var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if (h > 12) h -= 12;
  if (h < 10) {h = "0" + h};

  if (m < 10) {m = "0" + m};

  clock.textContent = h + " " + m;
}

setInterval(time, 5)
