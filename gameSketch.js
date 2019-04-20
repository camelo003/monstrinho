var x = 10;
var y = 50;

var incX = 1;
var incY = 1;

function setup() {
  createCanvas(640/2,460/2);
  var a = loadFont('assets/uni0553-webfont.ttf');
  textFont(a);
  textSize(32);
  fill(0,255,0);
  background(0);
}

function draw() {
  background(0,18);
  text('word', x, y);

  x = x + incX;
  y = y + incY;

  if(x > width-88 || x < 0){
    incX = incX * -1;
  }
  if(y > height || y < 22){
    incY = incY * -1;
  }

}