const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop');
const buttonAddMinutes = document.querySelector('.increase');
const buttonRemoveMinutes = document.querySelector('.decrease');
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeShop')
const buttonFirePlace = document.querySelector('.firePlace')
// const musicActivator = document.querySelectorAll('.card');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes



// const forestAudio = new Audio('/sounds/Floresta.wav')
// const rainingAudio = new Audio('/sounds/Chuva.wav')
// const coffeeShopAudio = new Audio('/sounds/Cafeteria.wav')
// const firePlaceAudio = new Audio('/sounds/Lareira.wav')

function resetControls() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
  secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");
}

function resetMinutes () {
  minutesDisplay
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
      updateTimerDisplay(minutes, 0);
    };
    
    updateTimerDisplay(minutes, seconds)
    
    countdown()
  }, 1000);
};

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  resetControls();
})

buttonStop.addEventListener('click', () => {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  resetControls()
  resetMinutes()
})

buttonAddMinutes.addEventListener('click', () => {
  buttonAddMinutes.classList.add;
})

buttonForest.addEventListener('click', function () {
  buttonForest.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')
})

buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('active')
  buttonForest.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonFirePlace.classList.remove('active')
})

buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonForest.classList.remove('active')
  buttonFirePlace.classList.remove('active')
})

buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.toggle('active')
  buttonRain.classList.remove('active')
  buttonCoffeeShop.classList.remove('active')
  buttonForest.classList.remove('active')
})