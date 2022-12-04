var radius = 40;
var x = 110;
var speed = 1;
var direction = 1;
let slider;

function setup() {
  createCanvas(400, 400);
  ellipseMode(RADIUS);

 
}


function draw() {
  
  background(0);
  
  x += speed * direction;
  
  if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
  
  if (direction == 1) {
arc(x, 60, radius, radius, 0.52, 5.76); // Face right
} else {
arc(x, 60, radius, radius, 3.67, 8.9); // Face left
}
  
  
  
}