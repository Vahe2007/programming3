
var side = 20;
let socket = io()
let num1 = 40;
let num2 = 40;
let colors = {
    green: "green",
    yellow: "yellow",
    white: "white",
    red: "red",
    brown: "brown",
    grey: "grey",
    black: "black"

}


function setup() {

    frameRate(4);
    createCanvas(num1 * side, num2 * side);
    background('#acacac');
}

function drawMatrix(data) {
    matrix = data.matrix

    for (var y = 0; y <  matrix.length ; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(colors.green);
            }
            else if (matrix[y][x] == 0) {
                fill(colors.grey);
            }
            else if (matrix[y][x]  == 2) {
                fill(colors.yellow);
            }
            else if (matrix[y][x]  == 3) {
                fill(colors.red);
            }
            else if (matrix[y][x]  == 4) {
                fill(colors.white);
            }
            else if (matrix[y][x]  == 5) {
                fill(colors.brown);
            }
            else if (matrix[y][x]  == 6) {
                fill(colors.black);
            }

            rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + ", " + y, x * side + side / 2, y * side + side / 2)

        }
    }


}
let Spring = document.getElementById("Spring")
let Summer = document.getElementById("Summer")
let Autumn = document.getElementById("Autumn")
let Winter = document.getElementById("Winter")

Spring.addEventListener("click", function changeWeather(){
    if (Spring.innerText === "Spring") {
        colors.grey = "grey"
        colors.green = "green"
        colors.red = "red"
        colors.yellow = "yellow"
        colors.brown = "brown"
        colors.black = "black"
        colors.white = "white"
    }
})
Summer.addEventListener("click", function changeWeather2(){
    if (Summer.innerText === "Summer") {
        colors.grey = "#F0E68C"
        colors.green = "#7CFC00"
        colors.yellow = "#DAA520"

    }
})
Autumn.addEventListener("click", function changeWeather3(){
     if (Autumn.innerText === "Autumn") {
        colors.grey = "#FFFF00"
        colors.yellow = "#FF4500"
        colors.green = "#DAA520"
        colors.red = "#FF6347"
    }
})
Winter.addEventListener("click", function changeWeather4(){
    if (Winter.innerText === "Winter") {
        colors.grey = "#F5F5F5"
        colors.yellow = "#20B2AA"
        colors.green = "#87CEEB"
        colors.red = "#663399"
        colors.white = "#808080"
    }
})



socket.on("matrix", drawMatrix);
