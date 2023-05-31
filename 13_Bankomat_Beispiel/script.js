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

let balance = 0;
let isGameRunning = true;

while (isGameRunning) {
  console.log("-----------");
  printMenu();
  console.log("-----------");
  let userInput = await readLineAsync();
 

  if (userInput == 1) {
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
    let inputOfUserEinzahlung = await readLineAsync();
    balance += parseFloat(inputOfUserEinzahlung);
    console.log("Sie haben " + inputOfUserEinzahlung + " Euro eingezahlt");
  }



  else if (userInput == 2) {
    console.log("Geben Sie den Betrag ein den Sie abheben möchten:");
    let inputOfUserAbhebung = await readLineAsync();
    balance -= parseFloat(inputOfUserAbhebung);
    console.log("Sie haben " + inputOfUserAbhebung + " Euro abgehoben");
  }
  
  
  else if (userInput == 3) {
    console.log("Ihr Kontostand beträgt: " + balance);
  }
  
  
  else if (userInput == 4) {
    console.log("Maschine stoppt!");
    isGameRunning=false;
    readline.close();
  }
  

  
}

console.log("Goodbye!");


function printMenu(){
  console.log("1 Einzahlen");
  console.log("2 Abhebung");
  console.log("3 Kontostand");
  console.log("4 Beendenen");
}





