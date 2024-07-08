"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 23;
let score = 20;
const inputField = document.querySelector(".guess");

const myFunction = () => {
  // alert("its Working");
  score = 20;
  let highSocre = localStorage.getItem("HIGH_SCORE") || 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".highscore").innerHTML = highSocre;
  document.querySelector(".number").textContent = "?";
  inputField.value = "0";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.color = "#eee";
  document.querySelector("main").style.color = "#eee";
  document.querySelector(".guess").style.color = "#eee";
  inputField.focus();
};

let body = document.getElementsByTagName("body")[0];
window.addEventListener("DOMContentLoaded", myFunction, false);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

const handleCheck = () => {
  const guess = Number(document.querySelector(".guess").value);

  //When there is No Input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number Entered!";
    inputField.focus();
  }

  //When Player is correct
  else if (guess === secretNumber) {
    localStorage.setItem("HIGH_SCORE", score);
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "#b8f7a1";
    document.querySelector("body").style.color = "#222";
    document.querySelector("main").style.color = "#222";
    document.querySelector(".guess").style.color = "#222";
    document.querySelector(".highscore").innerHTML = score;
    document.querySelector(".number").textContent = guess;
    inputField.focus();
  }

  //When Number us too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number is Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Game Over 💥";
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red";
    }
    inputField.focus();
  }

  //When Number is too Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Number is Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥Game Over💥";
      document.querySelector(".score").textContent = 0;
    }
    inputField.focus();
  }
  inputField.focus();
};

//Play Again
const handleAgain = () => {
  // score = 20;
  // document.querySelector(".message").textContent = "Start guessing...";
  // document.querySelector("body").style.backgroundColor = "#222";
  // document.querySelector("body").style.color = "#eee";
  // document.querySelector("main").style.color = "#eee";
  // document.querySelector(".guess").style.color = "#eee";
  // localStorage.getItem("HIGH_SCORE", highSocre);
  myFunction();
  inputField.focus();
};

document.querySelector(".again").addEventListener("click", handleAgain);

document.querySelector(".check").addEventListener("click", handleCheck);
