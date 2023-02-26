const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

function randomColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function handleClickStart() {
  intervalId = setInterval(randomColor, 1000);
  startButton.disabled = true;
}
function handleClickStop() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', handleClickStart);
stopButton.addEventListener('click', handleClickStop);
