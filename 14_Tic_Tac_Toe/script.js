let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

//console.log(field[2][2]);


printField();

field[0][1] = 1;

printField();

function printField(){
    for (let row=0; row < field.length; row++){
        let actualRow = field[row];
        let output = "";
        for(let col = 0; col<actualRow.length; col++){
            //console.log(actualRow[col]);
            output += actualRow[col] + " ";
        }
        console.log(output);
    }
}
