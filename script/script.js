// import { captions } from "./coptions.js";

// const startButton = document.querySelector('main button')
// const captionContainer = document.querySelector('main section div')
// const video = document.querySelector('video')


// startButton.addEventListener('click', () => {
//     if (video.pause) {
//         video.play();
//         startButton.classList.add('hidden')
//         captionContainer.classList.add('start')

//         console.log("start");
//     } else {
//         video.pause()
//         startButton.classList.remove('hidden')
//         captionContainer.classList.remove('start')

//         console.log("pause");
//     }
// })




const startButton = document.querySelector('main button');
const captionContainer = document.querySelector('main section div');
const video = document.querySelector('video');

console.log(startButton,captionContainer,video);

startButton.addEventListener('click', () => {
    if (video.pause) {
        video.play();
        startButton.classList.add('hidden');
        captionContainer.classList.add('start');
        console.log("start");
    } else {
        video.pause();
        startButton.classList.remove('hidden');
        captionContainer.classList.remove('start');
        console.log("pause");
    }
});
