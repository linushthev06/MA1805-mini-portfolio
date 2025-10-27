let img;
let hum;
let playing = false;

function preload() {
  img = loadImage('maxresdefault.jpg');
  hum = loadSound('35291__jace__continuous-static.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  img.loadPixels();
  let stepSize = 10;
  for (let y = 0; y < img.height; y += stepSize) {
    for (let x = 0; x < img.width; x += stepSize) {
      let i = 4 * (y * img.width + x);
      let r = img.pixels[i];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];
      fill(r, g, b);
      rect(x, y + 100, stepSize, stepSize);
    }
  }
}

function mousePressed() {
  if (playing) {
    hum.pause();
  } else {
    hum.loop();
    hum.amp(0.2);
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }
  playing = !playing;
}