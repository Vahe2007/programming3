var express = require("express");
var fs = require("fs")
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("../programming3"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

grassArr= [];
grassEaterArr = [];
predatorArr = [];
rabitArr = [];
pacmanArr = [];
bombArr = [];

Grass = require("./grass")
GrassEater = require("./GrassEater")
Predator = require("./predator")
Rabit = require("./rabit")
Pacman = require("./pacman")
Bomb = require("./bomb")
random = require('./random');




let num1 = 40;
let num2 = 40;
matrix = [];


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
        var x = Math.floor(Math.random() * num1)
        var y = Math.floor(Math.random() * num2)
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}

function generatedMatrix() {
    createMatrix(num1,num2)
    character(1, 100)
    character(2, 100)
    character(3, 100)
    character(4, 10)
    character(5, 5);
    character(6,7)

    return matrix;
}

matrix = generatedMatrix()

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
        else if (matrix[y][x] == 6){
            var bum = new Bomb(x, y, 6);
            bombArr.push(bum)
        }

    }
}

function drawserver() {
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
    for (var i in bombArr) {
        bombArr[i].BUM()


    }

    let sendData = {
        matrix: matrix
    }


    io.sockets.emit("matrix", sendData)

}
let statobj = {
    grass : grassArr.length,
    grassEater : grassEaterArr.length,
    predator : predatorArr.length,
    rabit : rabitArr.length,
    bomb : bombArr.length,
    pacman : pacmanArr.length
}

fs.writeFileSync("static.json", JSON.stringify(statobj))
io.emit("statobj", statobj)

io.on("connection", (socket) => {
    socket.emit("matrix", matrix)
    startGame()
})

let intervalID;

function startGame() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
    drawserver()
    },200)
}

