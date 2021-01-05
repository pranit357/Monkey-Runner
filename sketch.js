//To declare all the variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var survivalTime=0;


function preload(){
  
  //To load the images
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,300);
  
  //Creating monkey
  monkey=createSprite(80,260,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //Creating the ground
  ground=createSprite(250,295,1000,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  if(ground.x<0)
   {
    ground.x=ground.width/2;
   }

   //To jump
   if(keyDown("space"))
    {
      monkey.velocityY=-15;      
    }

    //To give gravity
    monkey.velocityY=monkey.velocityY+0.8;

    //To prrevent from falling down 
    monkey.collide(ground);

    fruit();
    rock();

    if(monkey.isTouching(bananaGroup))
      {
        bananaGroup.destroyEach();
        score=score+1;
      }
  
   stroke("black");
   textSize=(20);
   fill("black");
   text("Score : "+ score,430,20);
   survivalTime=Math.ceil(frameCount/frameRate());
   text("Time : "+survivalTime,430,40);

   monkey.collide(obstacleGroup);
   
  drawSprites();
  
}

function fruit()
{
  if(frameCount % 80===0)
  {
    var banana = createSprite(500,150,20,20);
    banana.y=Math.round(random(100,250));
    banana.scale=0.1;
    banana.addImage("banana",bananaImage)
    banana.velocityX=-5;
    banana.lifetime=100;
    bananaGroup.add(banana);
  }
}

function rock()
{
  if(frameCount% 200===0)
  {
    var obstacle= createSprite(500,270,20,20);
    obstacle.scale=0.2;
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.velocityX=-5;
    obstacle.lifetime=100;
    obstacleGroup.add(obstacle);
  }
}





