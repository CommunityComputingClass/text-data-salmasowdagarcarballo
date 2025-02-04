let myMessage = "Who is your favorite music artist?"
let contents = "";
let Button;
let xLocation = 15;
let myFont;

function preload(){
  myFont = loadFont("VIRUST.ttf")
}

function setup() {
  createCanvas(400, 400);
  Button = createButton("show");
  Button.position(175,150)
  Button.mousePressed(showText)
  background(245, 51, 87);
}
function draw() {
 
noStroke();
fill("white");
textSize(18)
textFont(myFont)
text(myMessage,xLocation,100);
xLocation = xLocation
}
function keyTyped(){
  contents = contents + key;
}
function showText(){
  text(contents,50,250,400,200);
}