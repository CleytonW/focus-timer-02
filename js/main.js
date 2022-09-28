const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.increase');
const buttonRemoveMinutes = document.querySelector('.decrease');
const musicActivator = document.querySelectorAll('.card');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

function resetControls() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
}

function countdown () {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    
    secondsDisplay.textContent = "00";

    if (minutes <= 0) {
      resetControls()
      return
    }
    
    if (seconds <= 0) {
      seconds = 2;

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    };
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
    
    countdown()
  }, 1000);
};


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  document.querySelector('.card').classList.add('active');

  countdown()
})

buttonPause.addEventListener('click', () => {
  resetControls();
})

buttonStop.addEventListener('click', () => {
  resetControls()
  document.querySelector('.card').classList.remove('active');
})

buttonAddMinutes.addEventListener('click', () => {
  buttonAddMinutes.classList.add;
})

musicActivator.forEach((element) => {
  element.addEventListener ('click', () => {
    const select = document.querySelector('.active');
    select.classList.remove('active');
    element.classList.add('active');
  })
});