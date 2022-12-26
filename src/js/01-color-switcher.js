
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyColor = document.body
buttonStop.disabled = true;
let timerId = null;

buttonStart.addEventListener('click', oneClick)
buttonStop.addEventListener('click', stopClick)

function oneClick() {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor()
    },1000 ) 
   
}

function stopClick() {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
   clearInterval(timerId);
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
