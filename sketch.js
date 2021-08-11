var bg, bgImg
var bottomGround
var topGround
var balloon,balloonImg,balloonImg2

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

balloonImg2 = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png","assets/balloon1.png","assets/balloon2.png","assets/balloon3.png",)
}


function setup(){

//background image
bg = createSprite(650,485,1,1);
bg.addImage(bgImg);
bg.scale = 2

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.7;



}

function draw() {
  createCanvas(1700,700)
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;

           if(keyDown(UP_ARROW)) {
             updateHeight(0,-7)
            balloon.addAnimation("B1 ",ballonImg2)
            
          }
          
          if(keyDown(DOWN_ARROW)) {
            updateHeight(0,7)
            balloon.addAnimation("B1 ",ballonImg2)
            
          }

          if(keyDown(RIGHT_ARROW)) {
            updateHeight(7,0)
            balloon.addAnimation("B1 ",ballonImg2)
            
          }
          if(keyDown(LEFT_ARROW)) {
            updateHeight(-7,0)
            balloon.addAnimation("B1 ",ballonImg2)
            
          }
        drawSprites();
        
}