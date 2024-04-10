// I'm storing all of my variables here hehe.
var y1 = 185;
var x1 = 115;
var x2 = 280;
var y2 = 250;
var x3 = 177;

// This next variable indicates speed.
var movement = 1;
var movement2 = .1;
var movement3 = .1;
var movement4 = 1;
var movement5 = 1;
var movement6 = 1;

// This function will only occur once, and serve to create the drawing medium!
function setup() {
  createCanvas(400, 500);
  movement = floor(random() * 10) + 1;
  movement2 = floor(random() * 10) + 1;
  movement3 = floor(random() * 10) + 1;
  movement4 = floor(random() * 10) + 1;
  movement5 = floor(random() * 10) + 1;
  movement6 = floor(random() * 10) + 1;
}

// This function will be visible the entire time the browser page is open. This will be my drawing!
function draw() {
  background(100,140,50);

  strokeWeight(2);
  bezier (297, 150, 300, 20, 225, 10, 95, 50, 25 ,25, 10, 100);
  line(95,50,135,70);
  triangle(75,75,150,70,200,200);
  triangle(250,150,300,100,315,175);
  
  circle (x1,180,100);
  circle (x2,180,100);
  circle(100,214,10);
  circle (300,214,10);
  triangle(50,500,200,275,350,500);
  rect(x3,y2,45,90);
  if (x3 >= 185 || x3 <= 176)
    {movement5*= -1;}
  x3 += movement5;
  if (y2 >=250 || y2 <= 245)
    {movement6*= -1;}
  y2 += movement6;
  
  if (x1 >= 115 || x1 <= 109)
    { movement2*= -1;
    }
  x1 += movement2;
  if (x2 >= 285 || x2 <= 279)
    {movement3*= -1;
    }
  x2 += movement3;
  
  ellipse(200,180,200,250);
  line(200,200,200,225);
  point (260,250);
  point (250, 260);
  line (125,125,175,130);
  line (275,125,225,130);
  
  curve(300, 100, 175, 250, 225, 250, 50, 100,10,10,10,10);
  circle(150,y1,90);
  circle(250,y1,90);
  line (194,y1,206,y1);
  if(y1 >= 195 || y1 <= 180)
  { movement*= -1;
  }
  y1 += movement;

  
  let textSizeValue = map(sin(frameCount * .1), -1, 1, 20, 25);
  text('Mason Noble - Simple', 200 / 2, 50 / 2);
  textSize (textSizeValue);
  
}