let a = 1;
let b = 2;

console.log(8%3);

/*if (a%8==0) {
    console.log("Number is even");
} 

else {
    console.log("Number is odd");
}*/


//Aufgabe 1
for (let index = 1; index < 5; index++) {
    if (index%2!=0) {
    console.log("XXXX")}

    if (index%2==0) {
    console.log("OOOO");
    }
}

// Aufgabe 2
let summe = 0;
for(let number = 1; number <= 100; number++) {
    if (number%2==0) {
        summe += number;
        //console.log(summe);
    }
}
console.log("Die Summe ist: " + summe);

//Aufgabe 3

for(let name=1; name <=20; name++) {
    if (name%20==0) {
        console.log(" XXXX");
        console.log("X    X");
        console.log("X    ");
        console.log("  XX");
        console.log("     X");
        console.log("X    X");
        console.log(" XXXX");
    }

}


/*
 XXXX
X    X
X 
  XXX
     X
X    X
 XXXX*/