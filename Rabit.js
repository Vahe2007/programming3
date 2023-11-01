const LivingCreature = require("./livingCreature");
let random = require('./random');

module.exports = class Rabit extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;

        this.directions = [];

    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }

    chooseCell(character) {

        this.getNewCoordinates()
        return super.chooseCell(character);
    }

    eat() {
        let foods = this.chooseCell(1)
        let food = random(foods)
        if (food) {
            this.energy++;
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 4
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.move++
        }

    }



    move() {
        this.energy++;
        let emptyCells = this.chooseCell(1)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

    }

    
}