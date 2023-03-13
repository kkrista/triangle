function setup() {
  createCanvas(500, 500);
  strokeWeight(2);

  frameRate(1);
}

function draw() {
  background(random(255), random(255), random(255));

  let pointOneX = width / 2;
  let pointOneY = 0;
  let pointTwoX = 0;
  let pointTwoY = height;
  let pointThreeX = width;
  let pointThreeY = height;

  fill(random(255), random(255), random(255));
  triangle(pointOneX, pointOneY,
           pointTwoX, pointTwoY,
           pointThreeX, pointThreeY);

  let nextPointOneX = (pointOneX + pointTwoX) / 2;
  let nextPointOneY = (pointOneY + pointTwoY) / 2;
  let nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  let nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  let nextPointThreeX = (pointThreeX + pointOneX) / 2;
  let nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);
}