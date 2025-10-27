let img;       // Variable to hold the loaded image
let hum;       // Variable to hold the loaded sound
let playing = false; // Boolean to track whether sound is playing

function preload() {
  // Load image and sound before the sketch starts
  img = loadImage('maxresdefault.jpg'); // Load static image from file
  hum = loadSound('35291__jace__continuous-static.wav'); // Load ambient static sound
}

function setup() {
  // Create canvas that fills the browser window
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0); // Set background to black

  // Prepare image pixels for manipulation
  img.loadPixels();

  let stepSize = 10; // Size of each pixel block for pixelS

  // Loop through image pixels in a grid pattern
  for (let y = 0; y < img.height; y += stepSize) {
    for (let x = 0; x < img.width; x += stepSize) {
      // Calculate pixel index in the image array
      let i = 4 * (y * img.width + x);

      // Extract RGB values from the pixel
      let r = img.pixels[i];
      let g = img.pixels[i + 1];
      let b = img.pixels[i + 2];

      // Set fill colour based on pixel colour
      fill(r, g, b);

      // Draw a rectangle at the pixel location, offset vertically
      rect(x, y + 100, stepSize, stepSize);
    }
  }
}

function mousePressed() {
  // Toggle sound playback on mouse press
  if (playing) {
    hum.pause(); // Pause sound if already playing
  } else {
    hum.loop();  // Start looping sound
    hum.amp(0.2); // Set volume to 20%

    // Ensure audio context is active (required by browsers)
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
  }

  // Flip the playing state
  playing = !playing;
}
