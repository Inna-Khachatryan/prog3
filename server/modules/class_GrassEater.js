const LivingCreature = require("./LivingCreature");
let random = require("./random");

module.exports = class GrassEater extends LivingCreature {

    constructor(x, y, index, isFemale) {
        super(x, y, index);
        this.energy = 5;
        this.isFemale = isFemale
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
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var grassEater = new GrassEater(newX, newY, 2, !this.isFemale)
            grassEaterArr.push(grassEater)
            this.energy = 5
        }
    }

    eat() {
        var food = random(this.chooseCell(1));
        this.energy--
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 1
        }
    }

    die() {
        if (this.energy <= 0 && this.isFemale) {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
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
            matrix[newY][newX] = 2
            matrix[this.y][this.x] = 0
            this.x = newCell[0]
            this.y = newCell[1]
        }
    }
}