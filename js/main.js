// Set variables for the DOM elements
const ygoContent = document.querySelectorAll('.ygoCont');
const logo = document.getElementById('logo');
const audio = document.getElementById('duelAudio');
const bewd = document.getElementById('bewd');
const blueLength = bewd.duration;
const dm = document.getElementById('dm');
const purpleLength = dm.duration;
const rebd = document.getElementById('rebd');
const redLength = rebd.duration;
const fronts = document.querySelectorAll('.front');

// Audio functions
let duelTime = () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.volume = 0.2;
    audio.play();
  }
}

// Card functions
let bewdSummon = () => {
  ygoContent[0].classList.add('is-flipped');
  bewd.play();
}

let dmSummon = () => {
  ygoContent[1].classList.add('is-flipped');
  dm.play();
}

let rebdSummon = () => {
  ygoContent[2].classList.add('is-flipped');
  rebd.play();
}

// Event listeners

// Logo
logo.addEventListener('click', duelTime);

// Cards
fronts[0].addEventListener('click', () => {
  bewdSummon();
  duelTime();
});

fronts[1].addEventListener('click', () => {
  dmSummon();
  duelTime();
});

fronts[2].addEventListener('click', () => {
  rebdSummon();
  duelTime();
});

