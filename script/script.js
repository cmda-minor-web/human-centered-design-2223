import { captions } from "./captions.js";

console.log(captions);

const startButton = document.querySelector("main button");
const captionContainer = document.querySelector("main section ul");
// let caption = document.querySelector("main section div p");
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



let currentCaptionIndex = 0;

video.addEventListener("timeupdate", () => {
  
  const currentTime = video.currentTime;
  const currentCaption = captions[currentCaptionIndex];
  
  console.log("timer 0", currentTime);
  
  if (currentTime >= currentCaption.time && currentCaptionIndex < captions.length + 1) {

    if (captions[currentCaptionIndex].groep === "true" ) {
      console.log("currentCaptionIndex", currentCaptionIndex,"currentTime", currentCaptionIndex , captions[currentCaptionIndex].charachter);

      if (captionContainer.childElementCount >= 1) {
        let captions = document.querySelectorAll("main section ul li");
        for (let i = 0; i < captions.length; i++) {
          captions[i].remove();
        }
      }

      const liElement = document.createElement("li");
      const pElement = document.createElement("p");
      const divElement = document.createElement("div");
      const imgElement = document.createElement("img");
      
      imgElement.src = captions[currentCaptionIndex].img;
      pElement.innerHTML = captions[currentCaptionIndex].caption;

      divElement.appendChild(imgElement);
      liElement.appendChild(divElement);
      liElement.appendChild(pElement);
      captionContainer.appendChild(liElement);

      // console.log("currentCaptionIndex", currentCaptionIndex, "currentTime",  currentCaptionIndex );

      setTimeout(() => {
        currentCaptionIndex++;
        console.log("currentCaptionIndex", currentCaptionIndex, "currentTime", currentCaptionIndex , captions[currentCaptionIndex].charachter );
        currentCaptionIndex++;

        const liElement2 = document.createElement("li");
        const pElement2 = document.createElement("p");
        const divElement2 = document.createElement("div");
        const imgElement2 = document.createElement("img");


        imgElement2.src = captions[currentCaptionIndex].img;
        pElement2.innerHTML = captions[currentCaptionIndex].caption;

        divElement2.appendChild(imgElement2);
        liElement2.appendChild(divElement2);
        liElement2.appendChild(pElement2);
        captionContainer.appendChild(liElement2);
        
        currentCaptionIndex++;
      }, 1500); // 5000 milliseconden = 5 seconden
      

    } else if(captions[currentCaptionIndex].groep === "false" ) {

      console.log("timer 3", currentCaptionIndex );

      const divElement = document.createElement("div");
      const liElement = document.createElement("li");
      const pElement = document.createElement("p");
      const imgElement = document.createElement("img");

      if (captions[currentCaptionIndex].charachter) {
        imgElement.src = captions[currentCaptionIndex].img;
      }

      pElement.innerHTML = captions[currentCaptionIndex].caption;

      divElement.appendChild(imgElement);
      liElement.appendChild(divElement);
      liElement.appendChild(pElement);
      captionContainer.appendChild(liElement);

      if (captionContainer.childElementCount > 1) {
        let caption = document.querySelector("main section ul li:first-of-type");
        caption.remove();
      }

      currentCaptionIndex++;
    }
  }
});


// if (captionContainer.childElementCount >= 1) {
//   let captions = document.querySelectorAll("main section ul li");
//   for (let t = 0; t < captions.length; t++) {
//     captions[t].remove();
//   }
// }