function setup() {
  createCanvas(600, 600);
  noLoop();
  noFill();
}

function draw() {
  background(255);

  let gridSize = 30;

  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {

      // Conditional variation
      let isOddRow = (y / gridSize) % 2 == 1;
      let isOddCol = (x / gridSize) % 2 == 1;

      strokeWeight(isOddRow ? 1 : 3);
      stroke(isOddCol ? 50 : 150, 100, 200, 150);  // color + transparency

      // Draw ellipse or rect with variation
      if ((x + y) % 2 == 0) {
        ellipse(x + gridSize / 2, y + gridSize / 2, gridSize * 0.8);
      } else {
        rect(x + gridSize * 0.1, y + gridSize * 0.1, gridSize * 0.8, gridSize * 0.8);
      }
    }
  }
}
