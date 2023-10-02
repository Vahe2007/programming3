var matrix = [];
var side = 20;
let num1 = 40;
let num2 = 40;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let predatorEaterArr = [];
let rabitArr = [];
let pacmanArr = [];

function createMatrix(num1, num2) {
    for (let i = 0; i < num1; i++) {
        matrix.push([])
        for (let j = 0; j < num2; j++) {
            matrix[i].push(0)
        }
    }
}


function character(index, count) {
    for (let a = 0; a < count; a++) {
        var x = Math.floor(random(0, num1))
        var y = Math.floor(random(0, num2))
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}

function setup() {
    createMatrix(num1, num2)
    character(1, 100)
    character(2, 100)
    character(3, 100)
    character(4, 10)
    character(5,1)
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y, 2);
                grassEaterArr.push(eater)
            }
            else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y, 3);
                predatorArr.push(pred)

            }
            else if (matrix[y][x] == 4) {
                var rab = new Rabit(x, y, 4);
                rabitArr.push(rab)

            }
            else if (matrix[y][x] == 5) {
                var pac = new Pacman(x, y, 5);
                pacmanArr.push(pac)

            }
            
        }
    }
}

function draw() {

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

            rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + ", " + y, x * side + side / 2, y * side + side / 2)

        }
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()

    }
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()

    }
    for (var i in rabitArr) {
        rabitArr[i].move()

    }
    for (var i in pacmanArr) {
        pacmanArr[i].move()

    }
}

console.log("test")