const LivingCreature = require("./livingCreature");
let random = require('./random');

module.exports = class Wall extends LivingCreature{
    constructor(x, y, index) {
    super(x,y,index);
       this.directions = [];
   }
   getNewCoordinates() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

chooseCell(character) {
   
    this.getNewCoordinates()
    return super.chooseCell(character);
}



}

