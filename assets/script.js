const startBox = document.querySelector("#start-box");
const startButton = document.querySelector("#start-button");
const timer = document.querySelector("#timer");
const timerBox = document.querySelector("#timer-box");
const wordBox = document.querySelector("#word-box");
const words = document.querySelector("#words");
const placeHolder = document.querySelector("#placeHolder");
const getLetter = document.querySelector("data-palceholder");
const winBox = document.querySelector("#win-box");
const scoreBox = document.querySelector("#score-box");


const wordBank = ["dog", "cat", "fish", "cow", "bird", "bug", "abracadabra"];
let result = [];

let secondsLeft = 5;
let wordChoice = "";
let win = false;

const renderBlanks = () => {
  wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
  choiceLetters = wordChoice.split("");
  numberOfBlanks = wordChoice.length;
  console.log(choiceLetters);
  console.log(numberOfBlanks);

  for (var i = 0; i < numberOfBlanks; i++) {
    result.push("_");
  }
  wordBox.textContent = result.join(" ");
};

const checkLetter = (key) => {
  for (i = 0; i < choiceLetters.length; i++) {
    if (key === choiceLetters[i]) {
      result[i] = key;
      console.log(result[i]);
      wordBox.textContent = result.join(" ");
    }
  }
  console.log(key);
  gameWin();
};

const keyEvent = function () {
  document.addEventListener("keydown", function (event) {
    let key = event.key.toLocaleLowerCase();
    checkLetter(key);
  });
};

// Timer Start

const setTime = () => {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0 || win === true) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    } 
    
    if (secondsLeft === 0 && win === false) {
      winBox.innerHTML = "You Lose!!!"
    }

  }, 1000);
};

// Determine Win or Loss

const gameWin = () => {
  if (wordBox.innerHTML.includes("_")) {
    console.log("Still guessing");
  } else showScore();
};

const showScore = () => {
  win = true;
  wordBox.setAttribute("style", "display:none;");
  timerBox.setAttribute("style", "display:none;");
  console.log("You Win!!");
  winBox.innerHTML = "You Win!!!";
};

// Game Start

const gameStart = () => {
  startButton.addEventListener("click", function () {
    startBox.setAttribute("style", "display:none");
    wordBox.setAttribute("style", "display:flex");
    timerBox.setAttribute("style", "display:flex");
    setTime();
    keyEvent();
  });
};

gameStart();
renderBlanks();
