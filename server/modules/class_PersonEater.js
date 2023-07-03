const LivingCreature = require("./LivingCreature");
let random = require("./random")


module.exports = class PersonEater extends LivingCreature  {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates(){
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
        var empty = random(this.chooseCell(3))
        if (empty && this.energy > 10) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var ps = new PersonEater(newX, newY, 4)
            personArr.push(ps)
            this.energy = 5
        }
    }
    eat() {
        var food = random(this.chooseCell(3));
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in personArr) {
                if (personArr[i].x == newX && personArr[i].y == newY) {
                    personArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 3
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in personEaterArr) {
                if (personEaterArr[i].x == this.x && personEaterArr[i].y == this.y) {
                    personEaterArr.splice(i, 1)
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
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newCell[0]
            this.y = newCell[1]
        }
    }
}