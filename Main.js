let matrix;


function setup(){
    createCanvas(window.innerWidth, window.innerWidth);

    matrix = new Matrix(30, 247);
}

function draw(){
    background("#1d2021");
    matrix.update();
}