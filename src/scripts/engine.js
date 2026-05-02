const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keysCheck = document.querySelector(".keys-check input");
const volumeSlider = document.querySelector(".volume-slider input");

let mapedkeys = [];
let volume = 0.5; 

const playTune = (key) => {
  const audio = new Audio(`src/tunes/${key}.wav`);
  audio.volume = volume;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  if (!clickedKey) return;

  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedkeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedkeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  volume = parseFloat(e.target.value);
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);