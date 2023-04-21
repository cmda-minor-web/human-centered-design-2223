import { captions } from "./captions.js";

console.log(captions);

const startButton = document.querySelector("main button");
const captionContainer = document.querySelector("main section div");
let caption = document.querySelector("main section div p");
const video = document.querySelector("video");
let pauseTime = 0;

startButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    startButton.classList.add("hidden");
    captionContainer.classList.add("start");
    console.log("start");
  } else {
    video.pause();
    startButton.classList.remove("hidden");
    console.log("pause");
  }
});

video.addEventListener("timeupdate", () => {
  pauseTime = video.currentTime;
  console.log("Pause time:", pauseTime);
  for (let i = 0; i < captions.length; i++) {
    if (pauseTime >= captions[i].time) {
      caption.innerHTML = captions[i].caption;
    }
  }
});
