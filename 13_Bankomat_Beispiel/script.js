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


  let Eingabe = await readLineAsync();
  let balance = "";
  

  if (Eingabe == 1) {

    for (let j = 0; j < 1; j++) {
    
      console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
      let inputOfUserEinzahlung = await readLineAsync();
      balance += parseInt(inputOfUserEinzahlung);
  
      console.log("Sie haben " + inputOfUserEinzahlung + " Euro eingezahlt");
  
  
    }

  
   
    }

console.log("Ihr Kontostand beträgt: " + Kontostand);
  



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

  console.log("-----------");
}