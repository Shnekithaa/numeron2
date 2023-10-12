// Iteration 8: Making scoreboard functional

let scoreBoard = document.getElementById("score-board");
scoreBoard.innerText = localStorage.getItem("total");

let playAgain = document.getElementById("play-again-button");
playAgain.onclick = function(){
    location.href = "index.html";
}
