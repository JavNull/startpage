var clock = document.getElementById('clock');

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if (h < 10) {h = "0" + h};

  if (m < 10) {m = "0" + m};

  if (h > 12) {
    clock.innerHTML =  `${h - 12} ${m} <span id="pm">pm</span>`
  } else if (h = 12) {
      clock.innerHTML =  `${h} ${m} <span id="pm">pm</span>`
  } else {
    clock.innerHTML =  `${h} ${m} <span id="am">am</span>`
  }
}

setInterval(time, 5)
