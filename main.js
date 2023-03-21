console.log("Guessing game!");

const MAX_CHANCES = 5;

let luckyNumberText = document.getElementById("lucky-number");
let guessForm = document.getElementById("guess-form");
let chancesText = document.getElementById("chances");

let gameoverOverlay = document.getElementById("gameover-overlay");
let retryButton = document.getElementById("retry");
let rightAnswerText = document.getElementById("right-answer");

let feedbackText = document.getElementById("feedback");

function generateRandomNumber() {
  let randomNumber = Math.ceil(Math.random() * 10);
  return randomNumber;
}

function takeGuessGame(chances) {
  let luckyNumber = generateRandomNumber();
  console.log(luckyNumber);

  guessForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stops the browser from reloading
    feedbackText.innerText = "";

    let guessNumber = e.target.elements.number.value; // Got the value
    e.target.elements.number.value = "";

    // Check if the guess number === lucky number
    if (Number(guessNumber) === luckyNumber) {
      console.log("You guessed it!");
      luckyNumberText.innerText = luckyNumber;
      feedbackText.innerText = "You guessed it!";
      takeGuessGame(MAX_CHANCES);
    } else {
      console.log("Wrong number");
      chances -= 1;
      chancesText.innerText = chances;
      if (chances === 0) {
        gameoverOverlay.style.display = "flex";
        rightAnswerText.innerText = luckyNumber;
      }
    }
  });
}

takeGuessGame(MAX_CHANCES);

retryButton.addEventListener("click", () => {
  gameoverOverlay.style.display = "none";
  takeGuessGame(MAX_CHANCES);
});
