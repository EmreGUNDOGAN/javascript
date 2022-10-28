import dogData from "./data.js";
import Dog from "./Dog.js";

let dogsArray = ["Rex", "Bella", "Teddy"];

const getNewDog = () => {
  const nextDogData = dogData[dogsArray.shift()];
  return nextDogData ? new Dog(nextDogData) : endMessage();
};

const render = () => {
  document.getElementById("container").innerHTML = dog.getDogHtml();
};

function nextDogHandler() {
  dog = getNewDog();
  render();
}

const endMessage = () => {
  document.querySelector(".cross-btn").style.display = "none";
  document.querySelector(".heart-btn").style.display = "none";
  container.innerHTML = `
  <div class="end-message-container"> 
    <p class="end-message">You swiped all dogs. You'll be notified if you match with any cutiepie!</p>
  </div>
    `;
};

document.querySelector(".cross-btn").addEventListener("click", () => {
  document.getElementById("dislike-badge").style.display = "flex";
  setTimeout(nextDogHandler, 2000);
});

document.querySelector(".heart-btn").addEventListener("click", () => {
  document.getElementById("like-badge").style.display = "flex";
  setTimeout(nextDogHandler, 2000);
});

let dog = getNewDog();
render();
