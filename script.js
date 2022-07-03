"use strict";
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".check").addEventListener("click", function () {
  const guessed = document.querySelector(".guess").value;
  if (score > 1) {
    //If there's no input
    if (!guessed) {
      document.querySelector(".message").textContent = "Enter a Number!";
      //The correct guess
    } else if (guessed == secretNumber) {
      document.querySelector(".message").textContent = "Correct!";
      document.querySelector("body").style.backgroundColor = "#78055c";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      //Updates the High Score
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      //If the guess is wrong
    } else if (guessed < secretNumber) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
    } else {
      document.querySelector(".message").textContent = "Too High!";
      score--;
    }
  } else {
    score = 0;
    document.querySelector(".message").textContent = "Take the L!";
  }
  document.querySelector(".score").textContent = score;
});
//Resets the score for a new game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#1e1417";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
