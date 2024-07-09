"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const input = document.getElementById("guess");
// const chkBtn = document.querySelector(".check");

// document.querySelector(".message").textContent = "🎉 Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 23;
let score = 20;
const inputField = document.querySelector(".guess");

const myFunction = () => {
  // alert("its Working");
  let highSocre = localStorage.getItem("HIGH_SCORE") || 0;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".highscore").innerHTML = highSocre;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.color = "#eee";
  document.querySelector("main").style.color = "#eee";
  document.querySelector(".guess").style.color = "#eee";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".number").textContent = secretNumber;
  score = 20;
  inputField.value = "";
  inputField.focus();
};

//handle check Button on Enter Key Press
let input = document.getElementById("guess");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

//Handle Reset Again on Esc key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    e.preventDefault();
    document.getElementById("again").click();
  }
});

let body = document.getElementsByTagName("body")[0];
window.addEventListener("DOMContentLoaded", myFunction, false);

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
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.color = "#222";
    document.querySelector("main").style.color = "#222";
    document.querySelector(".guess").style.color = "#222";
    document.querySelector(".highscore").innerHTML = score;
    document.querySelector(".number").textContent = guess;
    inputField.value = "";
    inputField.focus();
  }

  //When Number us too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
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
      document.querySelector(".message").textContent = "📉 Too Low!";
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
