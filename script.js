"use strict";

//generate a random number between 1 and 20 included 
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
const disable = document.createAttribute("disabled");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess)
    document.querySelector(".message").textContent = "no guessed number";
  else if (guess != secret) {
    score--;
    document.querySelector(".score").textContent = score;
    if (guess < secret) {
      if (secret - guess < 5)
        document.querySelector(".message").textContent = "low!";
      else document.querySelector(".message").textContent = "too low!";
    } else {
      if (guess - secret < 5)
        document.querySelector(".message").textContent = "high!";
      else document.querySelector(".message").textContent = "too high!";
    }
    
    //if right guess
  } else {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = secret;
    document.querySelector(".message").textContent = "BRAVOOOOOO!!";
    if (score > highscore) highscore = score;
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".check").setAttributeNode(disable);
    document.querySelector(".check").style.cursor = "not-allowed";
  }
  if (score == 0) {
    document.querySelector("body").style.backgroundColor = "#800000";
    document.querySelector(".message").textContent = "YOWAIMOOOOOO";
    document.querySelector(".number").textContent = secret;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").removeAttribute("disabled");
  document.querySelector(".check").style.cursor = "pointer";
});
