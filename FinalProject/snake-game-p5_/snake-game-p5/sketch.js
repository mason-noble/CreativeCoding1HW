/*
----- Game Coding Final Project ----- 
Name: Snake Game

----------------------------------------
*/

let cols; let rows;
let size = 25;
let board = [];
let food; let head;
let dir;
let length = 1; let gameOver = false;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  cols = width/size;
  rows = height/size;

  for (let i=0; i<cols; i++){
    board[i] = [];
    for (let j=0; j<rows; j++){
      board[i][j] = 0;
    }
  }
  
  food = createVector(int(random(0, cols)), int(random(0, rows)));
  head = createVector(int(random(0, cols)), int(random(0, rows)));
  dir = createVector(0, 0);
}



// Drawing the canvas.
function draw() {
  background(220);
  update();
  displayBoard();
  board[food.x][food.y] = -1; 
  
}
  

function update(){
  // Move Snake
  head.add(dir); 
  
  // Check if snake eats food: check if snake head and food are at the same location. Increment snake's length by 1 if yes. 
  if(dist(head.x, head.y, food.x, food.y) == 0){
    length += 1;
    generateFood();
  } 
  
  // Check if game is over, running into border or itself. If not, keep moving. 
  if (head.x < 0 || head.x > cols-1 || head.y < 0 || head.y > rows-1){
    console.log("Game Over: Run Into Border");
    gameOver = true;
    resetGame();
  } else if (board[head.x][head.y] > 1) {
    console.log("Game Over: Run Into Itself");
    gameOver = true;
  	dir.set(0, 0);
    resetGame();
  } else {
    board[head.x][head.y] = 1 + length; // Increment value of the head by one wherever the head moves to
    removeTail(); // Decrement by value of the board by one for the entire board

  }
  
}

function displayBoard(){
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      if (board[i][j] == 0){
        fill(255); // Color the board white
      } else if(board[i][j] == -1){
        fill(255, 0, 0); // Color the food red
      } else {
        fill(255, 255, 0); // Color the snake yellow
      }
      rect(i*size, j*size, size, size);
      // displayText(i, j);
    }
  }
}

function generateFood(){
  while(true){
    food = createVector(int(random(0, cols-1)), int(random(0, rows-1)));
    if (board[food.x][food.y] == 0){
      break;
    }
  }
}
function removeTail(){
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      if(board[i][j] > 0){
        board[i][j] -= 1;
      }
    }
  }
}

function displayText(x, y){
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(10);
  text(board[x][y], x*size+size/2, y*size+size/2);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    dir = createVector(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    dir = createVector(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    dir = createVector(0, 1);
  } else if (keyCode === UP_ARROW) {
    dir = createVector(0, -1);
  } else if (keyCode === 32) {
    loop();
    gameOver = false;
  }
  
}

function resetGame(){
stopGame();
}
function stopGame(){
  gameOver = true;
  noLoop();
  length = 1;
}
