let myMessage = "do you like candy? left arrow = yes, right arrow = no"
let xLocation = 15;
let myFont;

function preload(){
  myFont = loadFont("VIRUST.ttf")
}

function setup() {
  createCanvas(400, 400);
  background("pink");
}
function draw() {
 
noStroke();
fill("white");
textSize(12)
textFont(myFont)
text(myMessage,xLocation,100);
xLocation = xLocation
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fill(141, 201, 247)
  }
  if (keyCode === RIGHT_ARROW){
    fill(177, 252, 240)
  }
ellipse(random(0,400),random(0,400),10,10)
}