"use strict";
const newGame = document.querySelector(".new");
const rollDice = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");

// Initilization values
let currentScore, activePlayer, score, play;
function Initilization() {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  play = true;

  player1.classList.remove("opacity");
  player2.classList.add("opacity");

  player1.classList.remove("winner");
  player2.classList.remove("winner");

  document.querySelector(".score-0").textContent = score[0];
  document.querySelector(".score-1").textContent = score[1];

  document.querySelector(".current-0").textContent = currentScore;
  document.querySelector(".current-1").textContent = currentScore;

  dice.classList.add("hidden");
}
Initilization();

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`.current-${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("opacity");
  player2.classList.toggle("opacity");
}

rollDice.addEventListener("click", function () {
  if (play) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `images/dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.querySelector(`.current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener("click", function () {
  if (play) {
    score[activePlayer] += currentScore;
    document.querySelector(`.score-${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      play = false;
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener("click", Initilization);
