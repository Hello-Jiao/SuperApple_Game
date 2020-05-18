/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon = {
  x_pos: 600,
  y_pos: 576,
  width: 18
};
var collectable = {
  x_pos: 100,
  y_pos: 100,
  size: 50
};

var mountain = {
  x_pos: -400,
  y_pos: 100
};
var cloud = {
  x_pos: 200,
  y_pos: 100
};

function setup() {
  createCanvas(1024, 576);
  floorPos_y = 432; //NB. we are now using a variable for the floor position

  //NB. We are now using the built in variables height and width
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  treePos_x = width / 2;
  treePos_y = height / 2;
}

function draw() {
  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, height, width - floorPos_y);
  rect(685, floorPos_y, height, width - floorPos_y);
  //draw some green ground

  //mountain
  fill(125, 139, 124);
  //   triangle(647, 153, 486, 432, 809, 432);
  triangle(
    mountain.x_pos + 547,
    mountain.y_pos + 53,
    mountain.x_pos + 386,
    mountain.y_pos + 332,
    mountain.x_pos + 709,
    mountain.y_pos + 332
  );
  fill(156, 165, 155);
  //   triangle(750, 108, 456, 432, 994, 432);
  triangle(
    mountain.x_pos + 650,
    mountain.y_pos + 8,
    mountain.x_pos + 356,
    mountain.y_pos + 332,
    mountain.x_pos + 894,
    mountain.y_pos + 332
  );
  fill(100, 124, 88);
  //   triangle(755, 217, 627, 432, 914, 432);
  triangle(
    mountain.x_pos + 655,
    mountain.y_pos + 117,
    mountain.x_pos + 527,
    mountain.y_pos + 332,
    mountain.x_pos + 814,
    mountain.y_pos + 332
  );
  fill(120, 147, 107);
  //   triangle(645, 271, 493, 432, 735, 432);
  triangle(
    mountain.x_pos + 545,
    mountain.y_pos + 172,
    mountain.x_pos + 393,
    mountain.y_pos + 332,
    mountain.x_pos + 635,
    mountain.y_pos + 332
  );

  //cloud
  fill(255, 255, 255);
  //   rect(200, 75, 199, 50, 25, 25, 25, 25);
  rect(cloud.x_pos + 100, cloud.y_pos - 25, 199, 50, 25, 25, 25, 25);
  //   ellipse(270, 82, 72, 72);
  //   ellipse(318, 86, 72, 72);
  ellipse(cloud.x_pos + 170, cloud.y_pos - 18, 72, 72);
  ellipse(cloud.x_pos + 218, cloud.y_pos - 14, 72, 72);

  //trees
  //big tree
  fill(137, 103, 27);
  //   rect(817, 345, 19, 87);
  rect(treePos_x, treePos_y + 57, 19, 87);
  fill(188, 222, 111);
  //   triangle(827, 182, 767, 376, 827, 376);
  triangle(
    treePos_x + 10,
    treePos_y - 106,
    treePos_x - 50,
    treePos_y + 88,
    treePos_x + 10,
    treePos_y + 88
  );

  fill(138, 195, 61);
  //   triangle(827, 182, 827, 376, 886, 376);
  triangle(
    treePos_x + 10,
    treePos_y - 106,
    treePos_x + 10,
    treePos_y + 88,
    treePos_x + 69,
    treePos_y + 88
  );
  //small tree
  fill(137, 103, 27);
  //   rect(870, 373, 13, 59);
  rect(treePos_x + 50, treePos_y + 85, 10, 59);
  fill(188, 222, 111);
  //   triangle(876, 263, 876, 395, 836, 395);
  triangle(
    treePos_x + 56,
    treePos_y - 25,
    treePos_x + 56,
    treePos_y + 107,
    treePos_x + 16,
    treePos_y + 107
  );
  fill(138, 195, 61);
  //   triangle(876, 263, 916, 395, 876, 395);
  triangle(
    treePos_x + 56,
    treePos_y - 25,
    treePos_x + 96,
    treePos_y + 107,
    treePos_x + 56,
    treePos_y + 107
  );

  //canyon
  fill(168, 167, 186);
  //   triangle(186, 471, 168, 576, 204, 576);
  triangle(
    canyon.x_pos,
    canyon.y_pos - 107,
    canyon.x_pos - 18,
    canyon.y_pos,
    canyon.x_pos + 18,
    canyon.y_pos
  );
  fill(223, 222, 240);
  //   triangle(186, 471, 168, 576, 186, 576);
  triangle(
    canyon.x_pos,
    canyon.y_pos - 105,
    canyon.x_pos - 18,
    canyon.y_pos,
    canyon.x_pos,
    canyon.y_pos
  );
  fill(168, 167, 186);
  //   triangle(218, 471, 200, 576, 236, 576);
  triangle(
    canyon.x_pos + 32,
    canyon.y_pos - 105,
    canyon.x_pos + 14,
    canyon.y_pos,
    canyon.x_pos + 50,
    canyon.y_pos
  );
  fill(223, 222, 240);
  //   triangle(218, 471, 200, 576, 218, 576);
  triangle(
    canyon.x_pos + 32,
    canyon.y_pos - 105,
    canyon.x_pos + 14,
    canyon.y_pos,
    canyon.x_pos + 32,
    canyon.y_pos
  );

  fill(168, 167, 186);
  //   triangle(250, 471, 232, 576, 268, 576);
  triangle(
    canyon.x_pos + 64,
    canyon.y_pos - 105,
    canyon.x_pos + 46,
    canyon.y_pos,
    canyon.x_pos + 82,
    canyon.y_pos
  );
  fill(223, 222, 240);
  //   triangle(250, 471, 232, 576, 250, 576);
  triangle(
    canyon.x_pos + 64,
    canyon.y_pos - 105,
    canyon.x_pos + 46,
    canyon.y_pos,
    canyon.x_pos + 64,
    canyon.y_pos
  );
  //collectable
  fill(186, 51, 51);
  //   ellipse(414, 404, 31, 39);
  //   ellipse(430, 404, 31, 39);
  ellipse(
    collectable.x_pos + 314,
    collectable.y_pos + 304,
    collectable.size - 19,
    collectable.size - 11
  );
  ellipse(
    collectable.x_pos + 330,
    collectable.y_pos + 304,
    collectable.size - 19,
    collectable.size - 11
  );
  stroke(88, 70, 70);
  strokeWeight(3);
  //   line(430, 374, 422, 393);
  line(
    collectable.x_pos + 330,
    collectable.y_pos + 274,
    collectable.x_pos + 322,
    collectable.y_pos + 293
  );

  //Game character
  //hair
  strokeWeight(1);
  fill(0);
  ellipse(gameChar_x, gameChar_y - 54, 42, 33);
  //face
  fill(255, 227, 206);
  stroke(65);
  ellipse(gameChar_x, gameChar_y - 53, 22, 22);
  //eyes
  fill(255);
  stroke(65);
  ellipse(gameChar_x - 8, gameChar_y - 55, 8, 8);
  ellipse(gameChar_x + 7, gameChar_y - 56, 10, 10);
  ellipse(gameChar_x - 8, gameChar_y - 54, 2, 2);
  ellipse(gameChar_x + 8, gameChar_y - 54, 2, 2);
  //mouth
  line(gameChar_x - 2, gameChar_y - 46, gameChar_x + 2, gameChar_y - 46);
  //arms
  fill(255, 227, 206);
  stroke(65);
  strokeWeight(1);
  //left arm
  rect(gameChar_x - 15, gameChar_y - 38, 4, 17, 2);
  //right arm
  rect(gameChar_x + 10, gameChar_y - 38, 4, 17, 2);
  //left leg
  rect(gameChar_x - 9, gameChar_y - 15, 6, 12, 2);
  //right leg
  rect(gameChar_x + 2, gameChar_y - 15, 6, 12, 2);
  //body
  fill(248, 123, 142);
  noStroke();
  rect(gameChar_x - 9, gameChar_y - 42, 18, 30, 5);
}

function mousePressed() {
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}
