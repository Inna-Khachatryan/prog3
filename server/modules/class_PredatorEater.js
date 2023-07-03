const LivingCreature = require("./LivingCreature");
let  random  = require("./random")

module.exports = class PredatorEater extends LivingCreature{

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 2;
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
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }

    mul() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 8
            var predatorEater = new PredatorEater(newX, newY, 8)
            predatorEaterArr.push(predatorEater)
            this.energy = 2
        }
    }
    eat() {
        var food = random(this.chooseCell(2));
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in predatorEaterArr) {
                if (predatorEaterArr[i].x == this.x && predatorEaterArr[i].y == this.y) {
                    predatorEaterArr.splice(i, 1)
                }
            }
        }

    }
    move() {
        var newCell = random(this.chooseCell(0));
        this.energy--
        if (newCell) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = 8
            matrix[this.y][this.x] = 0
            this.x = newCell[0]
            this.y = newCell[1]
        }
    }
}