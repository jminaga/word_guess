const startBox = document.querySelector("#start-box");
const startButton = document.querySelector("#start-button");
const timer = document.querySelector("#timer");
const timerBox = document.querySelector("#timer-box")
const words = document.querySelector("#words");

const wordBank = ["dog", "cat", "fish", "cow", "bird", "bug"]
const result = [];


for (var i = 0; i < wordBank.length; i++) {
    let choices =
      wordBank[Math.floor(Math.random() * wordBank.length)];
    result.push(choices);
    console.log(result[0])
  }

if (result[0].includes("c","a","t")){
    console.log("yes")
} else {console.log("no")}



let secondsLeft = 30;

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
    timerBox.setAttribute("style", "display:flex")
    setTime()
  });
};




gameStart();
