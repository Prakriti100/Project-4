var garden,rabbit;
var gardenImg,rabbitImg;
var leafImg;
var leaf;
var appleImg;
var apple;
var select_Sprites = Math.round(random(1,2));

if (frameCount % 80 == 0){
  if (select_Sprites == 1){
    spawnApples();
  }
  else{
    spawnLeaves();
  }
}



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  spawnApples();
  spawnLeaves();


  drawSprites();
}

function spawnApples(){
  if (frameCount % 80 === 0){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.x = Math.round(random(5,395))
    apple.scale = 0.05;
    apple.velocityY = 3;
    apple.lifetime = 110;
  }
}

function spawnLeaves(){
  if (frameCount % 80 === 0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.x = Math.round(random(5,395))
    leaf.scale = 0.05;
    leaf.velocityY = 3;
    leaf.lifetime = 110;
  }
}