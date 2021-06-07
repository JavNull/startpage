var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if (h < 10) {h = "0" + h};

  if (m < 10) {m = "0" + m};

  if (h > 12) {
    clock.textContent = `${h - 12} ${m}`;
  } else {
    clock.textContent = `${h} ${m}`;
  }
}

setInterval(time, 5)
