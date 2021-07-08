// ~ Getting elements DOM
let valueStartBtn = document.querySelector('input[name="start"]');
let screen = document.getElementById("chronoTime");

// ~ Chrono Behaviour
let startTime = 0;
let start = 0;
let end = 0;
let diff = 0;
let timerID = 0;

function chrono() {
  end = new Date();
  diff = end - start;
  diff = new Date(diff);
  let msec = diff.getMilliseconds();
  let sec = diff.getSeconds();
  let min = diff.getMinutes();
  let hr = diff.getHours() - 1;
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (msec < 10) {
    msec = "00" + msec;
  } else if (msec < 100) {
    msec = "0" + msec;
  }
  document.getElementById("chronoTime").innerHTML =
    hr + ":" + min + ":" + sec + ":" + msec;
  timerID = setTimeout("chrono()", 10);
}

// ~ Chrono Behaviour btns
function chronoStart() {
  document.chronoForm.reset.onclick = chronoReset;
  start = new Date();
  chrono();
}
function chronoResume() {
  document.chronoForm.reset.onclick = chronoReset;
  start = new Date() - diff;
  start = new Date(start);
  chrono();
}
function chronoReset() {
  document.getElementById("chronoTime").innerHTML = "0:00:00:000";
  start = new Date();
  valueStartBtn.value = "Start";
}
function chronoStopReset() {
  document.getElementById("chronoTime").innerHTML = "0:00:00:000";
}

function chronoStop() {
  document.chronoForm.start.onclick = chronoResume;
  clearTimeout(timerID);
  if (screen.innerHTML !== "0:00:00:000") valueStartBtn.value = "Resume";
}
