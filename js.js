var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var score;
var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")

function setup() {
  
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  

  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
 
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  //Utilize os códigos que estão faltando
  ground = ???(200,180,400,20);
  ground.???("ground",groundImage);
  ground.x = ground.width /2;

  
//criar Grupos de Obstáculos e Nuvens
obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  
  
  score = 0;
}

function draw() {
  background(180);
  text("Pontuação: "+ score, 500,50);
  score = score + Math.round(frameCount/60);
   
  gameOver.visible = false;
  restart.visible = false;

    trex.changeAnimation("running", trex_running);

  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -13;
    //Utilize o código 'play()' para que o som inicie
    jumpSound.???();
  }
  
  //Acrescente '0.8' para adicionar gravidade ao jogo
  trex.velocityY = trex.velocityY + ???
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //Utilize o código 'isTouching' para programar quando o trex toca no obstáculo

  if(obstaclesGroup.???(trex)){
    //Adicione o código 'play' para o som iniciar
    jumpSound.???();
    //Defina o estado do jogo como END
    gameState = ???;
    dieSound.play()
  
}
  spawnClouds();
  
  spawnObstacles();
  
  drawSprites();
}

   



function spawnClouds() {
 
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     
    cloud.lifetime = 200;
    
    
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}