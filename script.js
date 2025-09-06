let boxes = document.querySelectorAll(".box");
let Winner = document.querySelector(".winner");
let newGame = document.querySelector(".new-btn");
let resetGame = document.querySelector(".reset-btn");

let turnO = true;

// Winning patterns
let winPattern = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Disable boxes
let disableBox = () => {
  boxes.forEach((box) => box.disabled = true);
};

// Enable boxes
let enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Main game logic
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    if (!checkWinner() && checkDraw()) {
      Winner.innerText = "It's a draw.";
      newGame.classList.remove("Hide");
    }
  });
});

// Show winner
let showWinner = (winner) => {
  Winner.innerText = `Congratulations! Winner is ${winner} 🎉`;
};

// Check winner
let checkWinner = () => {
  for (let pattern of winPattern) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      disableBox();
      newGame.classList.remove("Hide");
      return true;
    }
  }
  return false;
};

// Check draw
let checkDraw = () => {
  return [...boxes].every((box) => box.innerText !== "");
};

// Reset/New game
let New_Game = () => {
  turnO = true;
  enableBox();
  newGame.classList.add("Hide");
  Winner.innerText = "";
};

resetGame.addEventListener("click", New_Game);
newGame.addEventListener("click", New_Game);





