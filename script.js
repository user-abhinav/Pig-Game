"use strict";

let playing;
let scores;
let currentScore;
let activePlayer;
let player;

const init = function () {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player = document.getElementById(`current--${activePlayer}`);
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove("player--winner");
  player0.classList.add("player--active");

  player1.classList.remove("player--winner", "player--active");
  activePlayer = 0;
  dice.classList.add("hidden");
};

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
// no hash
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
init();

const switchPlayer = function () {
  currentScore = 0;
  player.textContent = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  activePlayer = !activePlayer ? 1 : 0;
  player = document.getElementById(`current--${activePlayer}`);
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    let diceRoll = Math.ceil(Math.random() * 6);
    dice.src = `dice-${diceRoll}.png`;
    dice.classList.remove("hidden");

    if (diceRoll !== 1) {
      currentScore += diceRoll;
      player.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      dice.classList.add("hidden");
      playing = false;
    }
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  init();
});
