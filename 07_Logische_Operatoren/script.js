// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable

let randomNumber1 = Math.random() * 100;
let randomNumber2 = Math.random() * 100;

let Number1 = randomNumber1;
let Number2 = randomNumber2;

console.log("Zahl 1 ist: " + Number1);
console.log("Zahl 2 ist: " + Number2);


console.log(" ");

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if ((Number1 < Number2) && (Number1 < 50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}


// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if ((Number1 < 30) || (Number2 < 30)) {
    console.log("Eine der beiden ist kleiner als 30");
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if ((Number1 < 50) && (Number2 != 50)) {
    console.log("Erste Zahl klein, zweite Zahl kein 50iger");
}