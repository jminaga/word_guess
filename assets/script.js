const startBox = document.querySelector("#start-box");
const startButton = document.querySelector("#start-button");
const timer = document.querySelector("#timer");
const timerBox = document.querySelector("#timer-box");
const wordBox = document.querySelector("#word-box")
const words = document.querySelector("#words");
const placeHolder = document.querySelector(".placeHolder");

const wordBank = ["dog", "cat", "fish", "cow", "bird", "bug", "abracadbra"];
const result = [];

let secondsLeft = 30;
let wordChoice = ""


// Creates blank spaces and renders to section
// const renderBlanks = () => {
//   wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
//   choiceLetters = wordChoice.split("")
//   numberOfBlanks = choiceLetters.length
//   blankArray = []
//   for (let i = 0; i < numberOfBlanks; i++){
//     blankArray.push("_")
//   }
//   placeHolder.textContent = blankArray.join(" ")
//   console.log(wordChoice)
//   console.log(blankArray)
// }  

const renderBlanks = () => {
  // Generates random word from word bank
  wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
  choiceLetters = wordChoice.split("");

  for (let i = 0; i < choiceLetters.length; i++) {
    const letter = choiceLetters[i]
    const letterPlaceHolder = document.createElement("div")
    letterPlaceHolder.setAttribute("id", "placeHolder")
    letterPlaceHolder.textContent = "_";
    wordBox.append(letterPlaceHolder);

console.log(letter)


  }
  console.log(choiceLetters)

  console.log(wordChoice)
}

const letterGuess = () => {

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
    wordBox.setAttribute("style", "display:flex")
    timerBox.setAttribute("style", "display:flex");
    setTime();
  });
};

gameStart();
renderBlanks()
