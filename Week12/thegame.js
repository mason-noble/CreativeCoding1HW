// variables
// x and y for my character
var characterX = 100;
var characterY = 100;
// key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = -25;
var shapeY = -60;
var shapeXSpeed;
var shapeYSpeed;

// x and y for a second shape
var shapeX2 = 25;
var shapeY2 = 60;
var shapeX2speed;
var shapeYspeed;

// mouse clicked shape
var mouseShapeX;
var mouseShapeY;
function setup() {
  createCanvas(500, 600);
  
  // random speed 
  shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
  shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() * 5) + 1);
  createCharacter(250, 30);
}

function draw() {
  //generate background
  background(50, 100, 50);
  stroke(0);
  fill(0);

  // function to generate borders
  createBorders(10);

  //createCharacter(200,350);
  drawCharacter();
  characterMovement();

  // create the enemies
  createObstacle1();
  createObstacle2();

  //move the enemies
  moveObstacle1();
  moveObstacle2();

  // exit check
  exitCheck();

  // exit message
  exitMessage();

  // mouse click shapes
  mouseClickShape();
}

function createObstacle1 (){
  fill(37, 160, 150);
  circle(shapeX, shapeY, 15);
}

function createObstacle2 (){
  fill (50, 40, 100);
  circle (shapeX2, shapeY2, 10);
   
}

function moveObstacle1(){
      // get a random speed when the first enemy starts
      shapeXSpeed = Math.floor(Math.random() * Math.floor(Math.random() / 10) - 1);
      shapeYSpeed = Math.floor(Math.random() * Math.floor(Math.random() / 10) + 1);
    // move first enemy
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if (shapeX > width) {
      shapeX = 0;
    }
    if (shapeX < 0) {
      shapeX = width;
    }
    if (shapeY > height) {
      shapeY = 0;
    }
    if (shapeY < 0) {
      shapeY = height;
    }
}

function moveObstacle2(){
       // get a random speed when the second enemy starts
       shapeX2Speed = Math.floor(Math.random() * Math.floor(Math.random() / 10) - 2);
       shapeY2Speed = Math.floor(Math.random() * Math.floor(Math.random() / 10) + 2);
     // move second enemy
     shapeX2 += shapeX2Speed;
     shapeY2 += shapeY2Speed;
     // check to see if the shape has gone out of bounds
     if (shapeX2 > width) {
       shapeX2 = 0;
     }
     if (shapeX2 < 0) {
       shapeX2 = width;
     }
     if (shapeY2 > height) {
       shapeY2 = 0;
     }
     if (shapeY2 < 0) {
       shapeY2 = height;
     }
}

function exitMessage(){
      // exit message
      textSize(16);
      text("EXIT", width - 270, height - 10);
}

function exitCheck () {
    // exit check
  if (characterX >= width - 270 && characterY >= height - 10) {
    fill(0);
    stroke(5);
    textSize(50);
    text("You Win!", width / 2 - 10, height / 2 - 50);
  }
}

function mouseClickShape () {
  fill(69, 150, 100);
  circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement() {
  // key movement
  if (keyIsDown(w)) {
    characterY -= 3;
  }
  else if (keyIsDown(s)) {
    characterY += 3;
  }
  else if (keyIsDown(a)) {
    characterX -= 3;
    console.log("movement: " + characterX);
  }
  else if (keyIsDown(d)) {
    characterX += 3;
  }
}
function createCharacter(x, y) {
  characterX = x;
  characterY = y;
  console.log(characterX);
  //character

  // circle(characterX,characterY,25);
}

function drawCharacter() {
  fill(23, 40, 123);
  circle(characterX, characterY, 25);
}
function createBorders(thickness) {
  // top border
  rect(0, 0, width, thickness);
  // left border
  rect(0, 0, thickness, height);
  // bottom left border
  rect(0, height - thickness, 200, thickness);
  // bottom right border
  rect(300, height - thickness, 200, thickness);
  // right border
  rect(width - thickness, 0, thickness, height);
  //wall one
  rect(140, 75 - thickness, 350, thickness);
  //wall two
  rect(10, 140 - thickness, 350, thickness);
  //wall three
  rect(140, 200 - thickness, 350, thickness);
  //wall four
  rect(10, 265 - thickness, 350, thickness);
  //wall five
  rect(140, 330 - thickness, 350, thickness);
  //wall six
  rect(10, 395 - thickness, 350, thickness);
  //wall seven
  rect(140, 455 - thickness, 350, thickness);
  //wall eight
  rect(10, 520 - thickness, 350, thickness);
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 3;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 3;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 3;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 3;
    }

  }
  */

//credit to Prof. McKague for the general layout of the coding.