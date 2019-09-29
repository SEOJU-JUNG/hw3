function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var x = 0;
var h = 20;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-30, 30), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 6;
  }

  if (h > 50) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 20;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
