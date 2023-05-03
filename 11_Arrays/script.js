/*let a = 4;
let b = 9;
let c = 8;

let arr = [4,9,8];
//console.log(arr[1]);

arr.push(10);
arr.push(3);


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}*/

//Afugabe 1

let array = [4,1,2,3];

array.push(17);
array.push(199);

//a

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}


//b 
let summe = 0
for(let index2 = 0; index2 < array.length; index2++) {
      
    summe += array[index2];
    
}
console.log("Summe: " + summe);


//c
let summe2 = 0
for(let index3 = 0; index3 < array.length; index3++) {
      
    summe2 += array[index3];
    
}
console.log("Mittelwert: " + summe2/6)


//Aufgabe  2

let arr = ["Susi", "Paula", "Hans"];
let output = "";

for (let index4 = 0; index4 < arr.length ; index4++) {
    
    output += arr[index4];

    if (index4%1 == 0){
        output += ", "
    }
    
   if (index4==arr.length-2){
        output += "und " 
    }

  
}


console.log (output); 

    
