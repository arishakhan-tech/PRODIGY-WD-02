 let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (isRunning) {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let lapTime = `${h}:${m}:${s}`;
    let lapDiv = document.getElementById("laps");
    let p = document.createElement("p");
    p.textContent = `Lap: ${lapTime}`;
    lapDiv.appendChild(p);
  }
}
