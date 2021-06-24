"use strict";

const rollDice = document.querySelector(".roll");
const dices = document.querySelector(".dice");

function diceRoll() {
  let newDice = Math.trunc(Math.random() * 6) + 1;
  dices.classList.remove("hidden");
  dices.src = `images/dice-${newDice}.png`;
}

rollDice.addEventListener("click", diceRoll);
