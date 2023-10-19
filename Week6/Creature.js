let bugs = [];
let wakeUpButton, sleepButton;
let awake = false; // To track if the creature is awake or asleep

function setup() {
  createCanvas(710, 400);
  background(50, 89, 100);

  // Body
  bugs.push(new Jitter(width/2, height/2 + 40, 0, 0, 0, 80, 1));  // 

  // Wake Up Button
  wakeUpButton = createButton('Wake Up');
  wakeUpButton.position(width/2 - 60, height - 40); 

  // Sleep Button
  sleepButton = createButton('Sleep');
  sleepButton.position(width/2 + 10, height - 40); 

  wakeUpButton.mousePressed(wakeUp);
  sleepButton.mousePressed(sleep);
}

function draw() {
  background(50, 89, 100);

  for (let bug of bugs) {
    bug.display();
    if (!awake) {
      bug.breathe();
      bug.move();  // Added move function for wandering effect
    }

    if (awake) {
      // Eye 1 (Left eye)
      fill(255);
      ellipse(bug.x - 20, bug.y - 40, 30, 30);  // 
      fill(0);
      ellipse(bug.x - 20, bug.y - 40, 15, 15);  // 
  
      // Eye 2 (Right eye)
      fill(255);
      ellipse(bug.x + 20, bug.y - 40, 30, 30);  // 
      fill(0);
      ellipse(bug.x + 20, bug.y - 40, 15, 15);  // 
    
      // Smiling Mouth
      fill(255);
      arc(bug.x, bug.y - 20, 40, 20, 0, PI, CHORD);  // 
    }
  }
}

function wakeUp() {
  awake = true;
}

function sleep() {
  awake = false;
}

// Jitter class
class Jitter {
  constructor(x, y, r, g, b, size, speed) {
    this.x = x;
    this.y = y;
    this.diameter = size;
    this.speed = speed;
    this.r = r;
    this.g = g;
    this.b = b;
    this.breatheDirection = 1;
    this.breatheAmount = 0.15;
  }

  move() {  // Added move (jitter) function
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  breathe() {
    this.diameter += this.breatheAmount * this.breatheDirection;
    if (this.diameter > 83 || this.diameter < 77) {
      this.breatheDirection *= -1;
    }
  }

  display() {
    fill(this.r, this.g, this.b);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
