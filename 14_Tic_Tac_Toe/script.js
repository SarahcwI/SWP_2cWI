let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//console.log(field[2][2]);

let inputPlayerRow = 2;
let inputPlayerCol = 1;

field[inputPlayerRow][inputPlayerCol] = 0;

printField();

function printField(){
    for (let row=0; row < field.length; row++){
        let actualRow = field[row];
        let output = "";
        for(let col = 0; col<actualRow.length; col++){
            //console.log(actualRow[col]);
            let sign=" ";
            if (actualRow[col] == 1){
                sign="X";
            }
            else if (actualRow[col] == 2){
                sign ="O";
            }
            output += sign + "|";
        }
        console.log(output);
    }
}




console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);


readline.close();

