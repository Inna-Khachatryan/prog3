// 0 back
// 1 grass 
// 2 grass Eater
// 3 person
// 4 person eater
// 8 predator eater

var matrix = [
    [3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 1, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 1, 8, 0],
    [1, 0, 0, 0, 8, 0, 0, 0, 0, 2, 0, 3, 2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2, 1, 0, 0, 0, 8, 0, 0, 0, 0, 2, 0, 3, 2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2],
    [0, 1, 0, 2, 3, 0, 8, 0, 0, 0, 8, 0, 1, 0, 4, 0, 8, 1, 4, 0, 4, 2, 0, 3, 0, 1, 0, 2, 3, 0, 8, 0, 0, 0, 8, 0, 1, 0, 4, 0, 8, 1, 4, 0, 4, 2, 0, 3],
    [2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 1, 8, 0, 3, 2, 0, 0, 3, 0, 0, 2, 0, 2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 1, 8, 0, 3, 2, 0, 0, 3, 0, 0, 2, 0],
    [4, 8, 0, 0, 8, 0, 0, 3, 1, 0, 2, 0, 1, 0, 3, 0, 8, 3, 1, 0, 4, 2, 0, 3, 4, 8, 0, 0, 8, 0, 0, 3, 1, 0, 2, 0, 1, 0, 3, 0, 8, 3, 1, 0, 4, 2, 0, 3],
    [8, 3, 8, 0, 0, 4, 2, 0, 1, 0, 0, 1, 1, 4, 0, 0, 8, 4, 0, 0, 0, 2, 0, 3, 8, 3, 8, 0, 0, 4, 2, 0, 1, 0, 0, 1, 1, 4, 0, 0, 8, 4, 0, 0, 0, 2, 0, 3],
    [2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 8, 1, 2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 8, 1],
    [3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0],
    [1, 0, 0, 0, 8, 0, 4, 0, 0, 2, 0, 3, 2, 1, 0, 1, 2, 1, 0, 8, 0, 0, 8, 2, 1, 0, 0, 0, 8, 0, 4, 0, 0, 2, 0, 3, 2, 1, 0, 1, 2, 1, 0, 8, 0, 0, 8, 2],
    [0, 1, 0, 2, 3, 0, 8, 0, 4, 0, 8, 0, 4, 0, 2, 3, 8, 0, 0, 0, 4, 2, 0, 3, 0, 1, 0, 2, 3, 0, 8, 0, 4, 0, 8, 0, 4, 0, 2, 3, 8, 0, 0, 0, 4, 2, 0, 3],
    [2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 1, 8, 0, 0, 8, 3, 4, 3, 0, 0, 2, 0, 2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 1, 8, 0, 0, 8, 3, 4, 3, 0, 0, 2, 0],
    [1, 8, 0, 0, 8, 0, 0, 3, 0, 0, 2, 0, 1, 0, 3, 2, 3, 0, 0, 0, 4, 2, 0, 3, 1, 8, 0, 0, 8, 0, 0, 3, 0, 0, 2, 0, 1, 0, 3, 2, 3, 0, 0, 0, 4, 2, 0, 3],
    [8, 3, 8, 0, 0, 4, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 8, 3, 0, 4, 0, 2, 1, 3, 8, 3, 8, 0, 0, 4, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 8, 3, 0, 4, 0, 2, 1, 3],
    [4, 1, 0, 1, 2, 0, 0, 8, 0, 4, 8, 2, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 8, 1, 4, 1, 0, 1, 2, 0, 0, 8, 0, 4, 8, 2, 0, 3, 0, 0, 2, 0, 1, 0, 0, 0, 8, 1],
    [3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 2, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 1, 0, 2, 0, 8, 0, 3, 0, 1, 8, 0, 3, 2, 0, 2, 0, 8, 0],
    [1, 0, 0, 0, 8, 0, 0, 1, 0, 2, 0, 3, 2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2, 1, 0, 0, 0, 8, 0, 0, 1, 0, 2, 0, 3, 2, 1, 0, 1, 2, 0, 0, 8, 0, 0, 8, 2],
    [0, 1, 0, 2, 3, 0, 8, 0, 0, 0, 8, 0, 1, 0, 0, 0, 8, 1, 4, 0, 0, 2, 0, 3, 0, 1, 0, 2, 3, 0, 8, 0, 0, 0, 8, 0, 1, 0, 0, 0, 8, 1, 4, 0, 0, 2, 0, 3],
    [2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 0, 8, 1, 0, 8, 0, 0, 3, 0, 0, 2, 0, 2, 2, 3, 0, 0, 1, 0, 8, 2, 3, 0, 3, 0, 8, 1, 0, 8, 0, 0, 3, 0, 0, 2, 0],
    [1, 8, 0, 0, 8, 4, 0, 3, 0, 0, 2, 0, 1, 0, 0, 1, 8, 2, 4, 0, 4, 2, 0, 3, 1, 8, 0, 0, 8, 4, 0, 3, 0, 0, 2, 0, 1, 0, 0, 1, 8, 2, 4, 0, 4, 2, 0, 3],
    [8, 3, 8, 0, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 8, 0, 8, 0, 0, 0, 0, 2, 0, 3, 8, 3, 8, 0, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 8, 0, 8, 0, 0, 0, 0, 2, 0, 3],
    [2, 1, 0, 1, 2, 3, 0, 8, 0, 0, 8, 2, 0, 3, 0, 3, 2, 3, 1, 0, 0, 0, 8, 1, 2, 1, 0, 1, 2, 3, 0, 8, 0, 0, 8, 2, 0, 3, 0, 3, 2, 3, 1, 0, 0, 0, 8, 1]
];

var matrix2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var side = 20;
var grassArr = [];
var grassEaterArr = [];
var predatorEaterArr = [];
var personArr = [];
var personEaterArr = [];


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background(0, 0, 0);
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater)
            }
            else if (matrix[y][x] == 8) {
                var prEater = new PredatorEater(x, y, 8);
                predatorEaterArr.push(prEater)
            }
            else if (matrix[y][x] == 3) {
                var prs = new Person(x, y, 3);
                personArr.push(prs)
            }
            else if (matrix[y][x] == 4) {
                var pse = new PersonEater(x, y, 4);
                personEaterArr.push(pse)
            }
            

        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#4E8021");
            }
            else if (matrix[y][x] == 0) {
                fill("#805310");
            }
            else if (matrix[y][x] == 2) {
                fill("#003319");
            }else if (matrix[y][x] == 8){
                fill("#F1F90A");
            }
            else if(matrix[y][x] == 3) {
                fill("#990000");
            }
             else if(matrix[y][x] == 4) {
                fill("#59291E");
            }

            rect(x * side, y * side, side, side);
        }

    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].move()
        grassEaterArr[i].die();
    }
    for (var i in predatorEaterArr) {
        predatorEaterArr[i].eat();
        predatorEaterArr[i].mul();
        predatorEaterArr[i].move();
        predatorEaterArr[i].die();
    }
     for (var i in personArr) {
        personArr[i].eat();
        personArr[i].mul();
        personArr[i].move();
        personArr[i].die();
    }
     for (var i in personEaterArr) {
        personEaterArr[i].eat();
        personEaterArr[i].mul();
        personEaterArr[i].move();
        personEaterArr[i].die();
    }

    if(grassArr.length >= matrix[0].length* matrix.length){
       matrix = matrix2
    }
}