const row = 10;
const col = 17;
let grid = [row - 1];
let block;
let rw;
let rh;
let collide = false;
let speed = 3;

function setup() {
  createCanvas(500, 800);
  rw = width / row;
  rh = height / col;
  initGrid();
  addFig1();
  frameRate(speed);
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    speed = 30;
  } else if (keyCode === LEFT_ARROW) {
    block.moveLeft(grid);
  } else if (keyCode === RIGHT_ARROW) {
    block.moveRight(grid);
  }
}

function draw() {
  background(10);
  grid = block.moveDown(grid);
  drawGrid();
  cleanUpGrid();
  checkNewFig();
}

function initGrid() {
  for (let i = 0; i < row; i++) {
    grid[i] = new Array(col - 1);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[i][j] = 0;
    }
  }
}

function drawGrid() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== 0) {
        fill(230);
        strokeWeight(2);
        stroke(100);
        rect(i * rw, j * rh, rw, rh);
      }
    }
  }
}

function cleanUpGrid() {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
      }
    }
  }
}

function addFig1() {
  block = new Block(4, 0, 4, -1, 4, -2, 4, -3);
}

function checkNewFig() {
  if (collide) {
    checkFullRow();
    addFig1();
    collide = false;
    speed = 3;
  }
}

function checkFullRow() {
  let sum = 0;
  for (let i = 0; i < row; i++) {
    console.log(grid[i][col - 1]);
    sum += grid[i][col - 1];
  }
  console.log(sum);
}
