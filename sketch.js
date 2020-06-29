var form;
var gameState = 0;
var dartBoard;
var score = 0;
var bow;
var arrow;
var blockA, blockB;
var chances;

function preload() {
  backgroundImg = loadImage("images/images.jpg");
  stage = loadImage("images/dart_wall.jpg");
  dartBoardImg = loadImage("images/archeryNew.png");
  instructionImg = loadImage("images/instructions.png");
  bowImg = loadImage("images/bow.png");
  arrowImg = loadImage("images/arrow.png");
  arrowHitImg = loadImage("images/arrow_hit.png");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight-115);
  form = new Form();
  blockA = createSprite(displayWidth/6,displayHeight/2 - 200,70,10);
  blockB = createSprite(displayWidth/6,displayHeight/2 + 300,70,10);
  dartBoard = createSprite(displayWidth/2 + 495,displayHeight/2 + 85,80,80);

  bow = createSprite(displayWidth/6,displayHeight/2 + 70);
  bow.addImage(bowImg);
  bow.velocityY = 10;

  bow.scale = 0.25;
  arrow = createSprite(displayWidth/6,displayHeight/2 + 100);
  arrow.addImage("normal",arrowImg);
  arrow.addImage("hit",arrowHitImg);
  arrow.setCollider("rectangle",0,0,75,10);
  arrow.scale = 0.25; 
}


function draw() {
  if(gameState === 0){
    background(backgroundImg);
  }
  else if(gameState === 2){
    form.displayInstructions();
  }
    else{
    background(stage);
    image(dartBoardImg,displayWidth/2 + 400,displayHeight/2- 20);

    if(arrow.collide(dartBoard)){
      arrow.velocityX = 0;
      score = score + 50;
      arrow.changeImage("hit");
    }
  if(keyDown("space")){
    bow.velocity.y = 0;
    arrow.velocity.x = 7;
  }
    drawSprites();
    noStroke();
    textSize(35);
    fill("black");
    text("Score : "+ score, displayWidth/2 + 400, displayHeight/4+ 30);
  }
  noStroke();
  textSize(65);
  fill("black");
  text("Target Shooter !",displayWidth/2 - 200, 100);
  textSize(35);
  text("Showcase your talent in archery and save the day !",displayWidth/3 - 100, 150);
  dartBoard.visible = false;
  form.display();
  arrow.y = bow.y;
  bow.bounceOff(blockA);
  bow.bounceOff(blockB);
  arrow.collide(dartBoard);
  blockA.visible = false;
  blockB.visible = false;
}