var shipSprite,seaSprite,seaImg,shipImg;




function preload(){
   
  
   seaImg = loadImage("sea.png");
   shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  
}

function setup(){
   createCanvas(400,400);
   seaSprite = createSprite(200,200,400,400);
   seaSprite.addImage(seaImg);
   //seaSprite.x = seaSprite.width/2;
   seaSprite.scale = 0.25;
   shipSprite = createSprite(275,200,50,50);  
   
   shipSprite.addAnimation("shipA",shipImg);
   shipSprite.scale = 0.25
   
}

function draw() {
  background("blue");
  seaSprite.velocityX = 3;
  if(seaSprite.x<0){
    console.log("x", seaSprite.x);
    seaSprite.x = seaSprite.width/2;
  }

  drawSprites();

  }


  
