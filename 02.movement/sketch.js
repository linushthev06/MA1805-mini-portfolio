let shapes = [];
let numShapes = 50;

function setup() {
  createCanvas(600, 600);
  noStroke();
  textSize(16);

  // shape properties
  for (let i = 0; i < numShapes; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(10, 40),
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
      dx: random(-1.5, 1.5), // gentle horizontal movement
      dy: random(-1.5, 1.5), // gentle vertical movement
      type: i % 2 === 0 ? "circle" : "square",
      showText: i % 10 === 0
    });
  }
}

function draw() {
  background(255);

  // Update and draw each shape
  for (let i = 0; i < shapes.length; i++) {
    let s = shapes[i];

 
    s.x += s.dx;
    s.y += s.dy;

    fill(s.r, s.g, s.b);

    if (s.type === "circle") {
      ellipse(s.x, s.y, s.size);
    } else {
      rect(s.x, s.y, s.size, s.size);
    }

    // Display text near shape 
    if (s.showText) {
      fill(0);
      text("HELLO WORLD", s.x + 10, s.y - 10);
    }
  }
}