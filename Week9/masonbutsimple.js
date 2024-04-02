function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(100,140,50);
  
  strokeWeight(2);
  bezier (297, 150, 300, 20, 225, 10, 95, 50, 25 ,25, 10, 100);
  line(95,50,135,70);
  triangle(75,75,150,70,200,200);
  triangle(250,150,300,100,315,175);
  
  circle (125,180,100);
  circle (280,180,100);
  circle(100,214,10);
  circle (300,214,10);
  triangle(50,500,200,275,350,500);
  rect(177,250,45,90);
  
  ellipse(200,180,200,250);
  line(200,200,200,225);
  ellipse(150,185,15,25);
  ellipse(250,185,15,25);
  point (260,250);
  point (250, 260);
  line (125,125,175,130);
  line (275,125,225,130);
  
  curve(300, 100, 175, 250, 225, 250, 50, 100,10,10,10,10);
  circle(150,185,90);
  circle(250,185,90);
  line (192,198,208,198);
  
  text('Mason Noble',230,490)
  textSize(17)
  
  
}