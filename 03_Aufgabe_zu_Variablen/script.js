let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let weightPerBanana = 0.22;
let weightPerApple = 0.34;


let appelsIn1Kilo = 1 / weightPerApple;
let bananasIn1Kilo = 1 / weightPerBanana;

let pricePerApple = weightPerApple * applePricePerKilo;
let pricePerBanana = weightPerBanana * bananaPricePerKilo;


let price8Apples = 8 * pricePerApple;
let price17Bananas = 17 * pricePerBanana;

let appelsIn1T = 1000 / weightPerApple;
let bananasIn1T = 1000 / weightPerBanana;

let price1tApples = appelsIn1T * pricePerApple;
let price1tBananas = bananasIn1T * pricePerBanana;


console.log("Die Anzahl der Äpfel pro Kilo ist " + appelsIn1Kilo);
console.log("Die Anzahl der Bananen pro Kilo ist " + bananasIn1Kilo);

console.log("Der Preis pro Apfel ist " + pricePerApple);
console.log("Der Preis pro Banane ist " + pricePerBanana);

console.log("Der Preis von 8 Äpfeln ist " + price8Apples);
console.log("Der Preis von 17 Bananen ist " + price17Bananas);

console.log("Der Preis von 1er Tonne Äpfel ist " + price1tApples);
console.log("Der Preis von 1er Tonne Bananen ist " + price1tBananas);
