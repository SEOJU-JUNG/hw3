1.	What code draws the blades of grass?

var x = 0;
var h = 10;

function draw() {
stroke(random(70, 70), 100, 90);
line(x, height-10, x+random(-10, 10), height-10-random(h));

 noStroke();

 x = x + 10;

  
  if (x > width) {
    x = random(10);
    h = h + 3;
  }

}

-------------------------------
2.	What code makes the "lawnmower" come by? How often does it come by?

if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

-------------------------------
3.	What's the point of the h variable?
h = 10;

-------------------------------
4.	What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
-	Randomizing a height of the grass
