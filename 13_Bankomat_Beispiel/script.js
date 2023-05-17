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



for (let i = 0; i < 10; i++) {

let balance = 0;
let Eingabe = await readLineAsync();

if ( Eingabe == 1) {
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
    let inputOfUserEinzahlung = await readLineAsync();

    balance += inputOfUserEinzahlung;

    console.log("Sie haben " + inputOfUserEinzahlung + " Euro eingezahlt");

   
}

console.log(balance) }



else if ( Eingabe == 2) {
    console.log("Geben Sie den Betrag ein den Sie abheben möchten:");
    let inputOfUserAbhebung = await readLineAsync();
    console.log("Sie haben " + inputOfUserAbhebung + " Euro abgehoben");
}

else if ( Eingabe == 3) {
    console.log("Ihr Kontostand beträgt" + balance);
}

else if ( Eingabe == 4) {
console.log("Maschine stoppt!");
readline.close();
}


console.log("-----------"); }