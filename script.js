
var side = 20;
let socket = io()
let num1 = 40;
let num2 = 40;




function setup() {

    frameRate(4);
    createCanvas(num1 * side, num2 * side);
    background('#acacac');
}

function drawMatrix(data) {
    matrix = data.matrix

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            }
            else if (matrix[y][x] == 3) {
                fill('red');
            }
            else if (matrix[y][x] == 4) {
                fill('white');
            }
            else if (matrix[y][x] == 5) {
                fill('brown');
            }
            else if (matrix[y][x] == 6){
                fill("black");
            }

            rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + ", " + y, x * side + side / 2, y * side + side / 2)

        }
    }

}

socket.on("matrix", drawMatrix);

let btn = document.getElementById("btn")
function BUM() {
    if(matrix[y][x] == 6){
        matrix[y][x] == 0
    }
}
btn.addEventListener("click", BUM)
