function setup() {
  createCanvas(200, 200);
  background(240);

  // Soft face
  noStroke();
  fill(255, 230, 180);
  ellipse(100, 100, 160, 160);

  // Closed eyes (peaceful)
  stroke(80);
  strokeWeight(2);
  line(70, 80, 85, 85);
  line(115, 85, 130, 80);

  // Gentle smile
  noFill();
  stroke(100);
  strokeWeight(2);
  arc(100, 120, 60, 30, 0, PI);

  // Quiet sparkle
  fill(200, 255, 200);
  noStroke();
  ellipse(40, 40, 8, 8);
  ellipse(160, 50, 6, 6);
  ellipse(150, 160, 5, 5);
}
