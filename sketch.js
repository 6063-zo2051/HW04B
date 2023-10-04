function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  background(255, 255, 255);
}

function draw() {
}

function mouseClicked() {
  let randomShape = getRandomShape();
  let randomColor = getRandomColor();
  fill(randomColor);
  randomShape(mouseX, mouseY);
}

function getRandomShape() {
  let shapes = [rect, circle, triangle];
}

function getRandomColor () {
  return color(random(255), random(255), random(255));
}



