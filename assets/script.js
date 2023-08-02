const startBox = document.querySelector("#start-box");
const startButton = document.querySelector("#start-button");
const timer = document.querySelector("#timer");
const timerBox = document.querySelector("#timer-box");
const wordBox = document.querySelector("#word-box");
const words = document.querySelector("#words");
const placeHolder = document.querySelector("#placeHolder");
const getLetter = document.querySelector("data-palceholder");

const wordBank = ["dog", "cat", "fish", "cow", "bird", "bug", "abracadbra"];
const result = [];

let secondsLeft = 30;
let wordChoice = "";


const renderBlanks = () =>{
  wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
    choiceLetters = wordChoice.split("");
    numberOfBlanks = wordChoice.length;
    console.log(choiceLetters)
    console.log(numberOfBlanks)

 for (var i = 0; i < numberOfBlanks; i++) {
  result.push("_")

 }
wordBox.textContent = result.join(" ")
console.log(result)
}


// Timer Start

const setTime = () => {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
};

// Game Start

const gameStart = () => {
  startButton.addEventListener("click", function () {
    startBox.setAttribute("style", "display:none");
    wordBox.setAttribute("style", "display:flex");
    timerBox.setAttribute("style", "display:flex");
    setTime();
  });
};

gameStart();
renderBlanks();

