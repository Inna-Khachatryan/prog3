socket = io();
var side = 20, m = 40, n = 40;
mulForGrass = 8
var grassColor = [0,100,0]

function setup() {
    frameRate(40);
    createCanvas(800, 400);
    background("#C0C0C0");
    button1 = document.getElementById("summer");
    button2 = document.getElementById("spring");
    button3 = document.getElementById("winter");
    button4 = document.getElementById("autumn");

    button2.addEventListener("click", onColorChange);
    button3.addEventListener("click", onColorChange);
    button4.addEventListener("click", onColorChange);
    button1.addEventListener("click", onColorChange);
}

function onColorChange(){
    if(event.target.id == "summer"){
        grassColor = "coral"
        multForGrass = 4
    }else if(event.target.id == "spring"){
        grassColor = "darkgreen"
        multForGrass = 6
    }else if(event.target.id == "winter"){
        grassColor = "aqua"
        multForGrass = 14
    }else if(event.target.id == "autumn"){
        grassColor = "rgb(158, 85, 33)"
        multForGrass = 16
    }
    let data = {
        multForGrass : multForGrass
    }

    socket.on("matrix", drawMatrix);
    socket.emit("afterClick", data)

}

function drawMatrix(data) {

    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(grassColor);
            }
            else if (matrix[y][x] == 0) {
                fill("#805310");
            }
            else if (matrix[y][x] == 2) {
                fill("#003319");
            } else if (matrix[y][x] == 8) {
                fill("#F1F90A");
            }
            else if (matrix[y][x] == 3) {
                fill("#990000");
            }
            else if (matrix[y][x] == 4) {
                fill("#59291E");
            }

            rect(x * side, y * side, side, side);
        }

    }
}



socket.on("matrix", drawMatrix);