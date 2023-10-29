// pomodoro.js
let minutes = 25;
let seconds = 0;
let interval;

function startTimer() {
  if (!interval) {
    interval = setInterval(function() {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          alert('Pomodoro complete!');
          resetTimer();
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  minutes = 25;
  seconds = 0;
  document.getElementById('timer').innerText = '25:00';
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
