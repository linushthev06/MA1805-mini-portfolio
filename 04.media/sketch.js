let img;       // Image asset
let hum;       // Sound asset
let video;     // Video asset
let capture;   // Webcam feed
let playing = false;

function preload() {
  img = loadImage('Antenna.jpg');     // Load static image
  hum = loadSound('humm.wav');        // Load ambient sound
  video = createVideo('TheSea.mov');  // Load video
  video.hide();                       // Hide HTML video element
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);     // Start webcam
  capture.size(320, 240);
  capture.hide();

  hum.amp(0.1);                       // Set sound volume
  video.play();                       // Start video playback
  noStroke();
}

function draw() {
  background(0);

  // Pixelate background image
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

  // Webcam feed with filter
  image(capture, 0, 0, 320, 240);
  filter(THRESHOLD);

  // Video playback
  image(video, 350, 0, 400, 240);
}

function mousePressed() {
  if (playing) {
    video.pause();
    hum.pause();
  } else {
    video.loop();
    hum.loop();
  }
  playing = !playing;
}