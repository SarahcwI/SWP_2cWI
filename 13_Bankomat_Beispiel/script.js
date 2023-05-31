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

while (true) {
  printMenu();
  let userInput = await readLineAsync();

  if (userInput == 1) {
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
    let inputOfUserEinzahlung = await readLineAsync();
    balance += parseFloat(inputOfUserEinzahlung);

    console.log("Sie haben " + inputOfUserEinzahlung + " Euro eingezahlt");
  }

  if (userInput == 2) {
    console.log("Ihr Kontostand beträgt: " + balance);
  }


  console.log("-----------");
}


function printMenu(){
  console.log("1 Einzahlen");
}


/*else if (Eingabe == 2) {
  console.log("Geben Sie den Betrag ein den Sie abheben möchten:");
  let inputOfUserAbhebung = await readLineAsync();

  balance -= inputOfUserAbhebung;

  console.log("Sie haben " + inputOfUserAbhebung + " Euro abgehoben");
}


else if (Eingabe == 3) {
  console.log("Ihr Kontostand beträgt: " + balance);
}


else if (Eingabe == 4) {
  console.log("Maschine stoppt!");
  readline.close();
}
*/

