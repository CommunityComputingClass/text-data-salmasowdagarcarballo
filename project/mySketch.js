let myMessage = "Good Evening"
let xLocation = 100;
let myFont;

function preload(){
  myFont = loadFont("VIRUST.ttf")
}

function setup() {
  createCanvas(400, 400);

}
function draw() {
  background(9, 93, 145);
noStroke();
fill("white");
textSize(30)
textFont(myFont)
text(myMessage,xLocation,200);
xLocation = xLocation
}