

function setup() {
  createCanvas(600, 600); // Set the canvas size to 600x600 pixels
  background(255); // Set the background color to white
  noLoop(); // Prevent draw() from repeating — we only want to draw once
}

function draw() {
  let shapeCount = 0; // Start with 0 shapes drawn

  // Repeat until we've drawn 50 shapes
  while (shapeCount < 50) {
    // Choose a random position on the canvas
    let x = random(0, width);
    let y = random(0, height);

    // Choose a random size between 10 and 40 pixels
    let size = random(10, 40);

    // Choose a random color using RGB values
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);

    fill(r, g, b); // Set the fill color
    noStroke(); // Remove the outline from shapes

    // Alternate between drawing a circle and a square
    if (shapeCount % 2 == 0) {
      ellipse(x, y, size, size); // Draw a circle
    } else {
      rect(x, y, size, size); // Draw a square
    }

    // Every 10 shapes, add some text
    if (shapeCount % 10 == 0) {
      fill(0); // Set text color to black
      textSize(16); // Set text size
      text("This is my second project!", x, y); // Draw the text at the same position
    }

    // Increase the shape count by 1
    shapeCount = shapeCount + 1;
  }
}
