const buttons = document.querySelectorAll(".btn");
const playAgainBtn = document.querySelector('.playAgain')
const playerScoreText = document.querySelector(".playerScore");
const compScoreText = document.querySelector(".compScore");
const resultText = document.querySelector(".resultText");
let playerChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;

// Return value of button clicked
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.textContent;
    compChoice = getCompChoice();
    resultText.textContent = playGame(playerChoice, compChoice);
    console.log(playerChoice, compChoice);
  })
);

function disableBtns() {
  buttons.forEach((elem) => {
    elem.disabled = true;
    elem.style.opacity = 0.0;
    elem.style.cursor = "default";
  })
}

function playAgain() {
    playAgainBtn.style.opacity = 1;
    playAgainBtn.style.pointerEvents = "all";
}

// Generate random computer choice
function getCompChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else if (randomNum === 2) {
    return "Scissors";
  }
}
getCompChoice();

function playGame(compChoice, playerChoice) {
  let result;
  if (playerChoice === compChoice) {
    result = "AI and humans are at a standstill";
  } else if (playerChoice === "Rock" && compChoice === "Scissors") {
    result = "The humans have conquered this round";
    playerScore++;
  } else if (playerChoice === "Paper" && compChoice === "Rock") {
    result = "The AI has been defeated";
    playerScore++;
  } else if (playerChoice === "Scissors" && compChoice === "Paper") {
    result = "The Robots have been stopped";
    playerScore++;
  } else if (playerChoice === "Scissors" && compChoice === "Rock") {
    result = "The humans have lost this fight";
    compScore++;
  } else if (playerChoice === "Rock" && compChoice === "Paper") {
    result = "AI have won this battle";
    compScore++;
  } else if (playerChoice === "Paper" && compChoice === "Scissors") {
    result = "The robots conquered this battle";
    compScore++;
  }
  compScoreText.textContent = compScore;
  playerScoreText.textContent = playerScore;


  if (playerScore === 5) {
    result = "The humans will live to fight another day";
    playAgain();
    disableBtns();
  } else if (compScore === 5) {
    result = "Human kind has been destroyed";
    playAgain();
    disableBtns();
  }
  return result;
}
playGame();
