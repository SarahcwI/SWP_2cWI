// Funktionen
//DRY Dont repeat yourself


/*function printMenu (name, age, place) {
    console.log("Wilkommen "+ name + " You are " + age +  " years old nad come from " + place); 
}


function add (a,b) {
    return a + b - 17 * 0.4;
}


printMenu("Peter", 17, "Lustenau");
printMenu("Hans,", 54, "Dornbirn");


let result = add(4,7);
console.log(result);*/



//Addieren
function add (a,b) {
    return a + b;
}
console.log (add(7,3));


//Subtrahieren
function subtract(a,b) {
    return a - b;
}
console.log (subtract(8,2));


//Multiplizieren 
function multiply (a,b) {
    return a * b;
}
console.log (multiply(3,5));


//Superkalkulation
function supercalculation(a,b) {
    return ( a + b ) / 2 * a;
}
console.log(supercalculation(4,6));

//Osterfunktion



/*let N = year - 1900;
let A = N%19;
let B = (7*A+1)/19;
let M = (11*A+4-B)%29;
let Q = N/4;
let W = (N+Q+31-M)%7;
let P = 25-M-W;*/


function printEasterDate (year) {
    let N = year - 1900;
    let A = N%19;
    let B = Math.floor((7*A+1)/19);
    let M = (11*A+4-B)%29;
    let Q = Math.floor (N/4);
    let W = (N+Q+31-M)%7;
    let P = (25-M-W);

    return P;

}

let result = printEasterDate(2017);


if (result > 0) {
    console.log("Ostersonntag ist der " + result + ". April");
}

else {
    console.log("Ostersonntag ist der " + (result + 31) + ". März");
}


   
  


