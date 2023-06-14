import { log } from "console";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
      //
    });
  });
};


let field = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

//console.log(field[2][2]);
//let inputPlayerRow = 2;
//let inputPlayerCol = 1;
//field[inputPlayerRow][inputPlayerCol] = 0;



function printField() {
  for (let row = 0; row < field.length; row++) {
    let actualRow = field[row];

    let output = "";
    for (let col = 0; col < actualRow.length; col++) {
      let sign = " ";
      if (actualRow[col] == 1) {
        sign = "X";
      }
      else if (actualRow[col] == 2) {
        sign = "O";
      }
      output += sign + "|";
    }
    console.log(output);
  }
}

let isGameRunning = true;
let playerPlaying = 0;
let counter;

while (isGameRunning) {
  for (counter = 0; counter < 9; counter++) {
    if (counter % 2 == 0) {
      playerPlaying = 1;
    }
    else { playerPlaying = 2; }

    console.log("It's Player " + playerPlaying + "s turn");
    console.log("Reihe:");
    let inputPlayerRow = await readLineAsync();
    console.log("Spalte:");
    let inputPlayerColumn = await readLineAsync();

    field[inputPlayerRow][inputPlayerColumn] = playerPlaying;
    printField();

    if (field[0][0] == field[0][1] == field[0][2] && counter > 2) {
      endGame();
    }
  }
}

function inputPlayer(){
  
}

function endGame() {
  console.log("Player" + playerPlaying + " Won!");
  counter =8;
  isGameRunning = false;
  readline.close();
}
