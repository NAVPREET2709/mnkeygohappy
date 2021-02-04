
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,300);
  
  
  
  monkey = createSprite(80,220,10,10);
  monkey.addAnimation("monkey",monkey_running);
 monkey.scale=0.1;

  ground = createSprite(400,255,900,10);
 ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
}




function draw() {
background("white")

  
  if (keyDown("space")&& monkey.y>=210){
  monkey.velocityY=-14;
  
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  
  
  
  
  
if(ground.x<150){
  ground.x=ground.width/2;
}
  
  
    
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
 
  
  
  stroke("black");
  fill("black");
SurvivalTime=Math.ceil(frameCount/frameRate());
  text ("SURVIVAL TIME :"+SurvivalTime,220,50);

 
  
  spawnObstacles();
  spawnfruits();
  
 
  drawSprites ()
  
}

function spawnObstacles(){
 if (frameCount % 200 === 0){
   var obstacleGroup = createSprite(600,230,10,40);
   obstacleGroup.velocityX=-4;
   obstacleGroup.addImage(obstaceImage);
   obstacleGroup.scale=0.1;
   obstacleGroup.lifetime=300;
   
    ground.depth = obstacleGroup.depth;
  ground.depth = ground.depth+1;
   
 }
}

function spawnfruits(){
 if (frameCount % 100 === 0){
 var fruits = createSprite(600,Math.round(random(100,150)),10,10);
   fruits.velocityX=-4;
   fruits.addImage(bananaImage);
   fruits.scale=0.1;
   fruits.lifetime=300;
 }
}

