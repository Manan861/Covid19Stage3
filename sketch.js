var name, boy, girl, boyImg, girlImg;
var gameState=0;
var form;
var girlA, boyA, girlAnimation, boyAnimation;
var road, roadImg;
var hospital1, hospital2, hospital3, hospitalImg, hospitalImg2, hospitalImg3;
var character;
function preload(){
  boyImg=loadImage("BoySprite.png");
  girlImg=loadImage("GirlSprite.png");
  roadImg=loadImage("roadSprite3.png");
  hospitalImg=loadImage("HospitalSprite3.png");
  hospitalImg2=loadImage("HospitalSprite1.png");
  hospitalImg3=loadImage("HospitalSprite4.png");
  girlAnimation=loadAnimation("GirlSprite2.png","GirlSprite3.png");
  boyAnimation=loadAnimation("BoySprite2.png","BoySprite3.png");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
  form=new Form();

  boyA=createSprite(displayWidth/4,displayHeight/2-200,50,100);
  boyA.addAnimation("walking",boyAnimation);

  road=createSprite(displayWidth/2,displayHeight/2);
  road.addImage(roadImg);
  road.visible=false;

 
  

  boyA.visible=false;
  //girlA.visible=false;
}


function draw() {
  background(255);
  console.log(gameState);
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
    boy=createSprite(displayWidth/2-300,displayHeight/2,50,50);
    girl=createSprite(displayWidth-400,displayHeight/2,50,50);
    boy.depth=1;
    girl.depth=1;
    textSize(20);
    fill("black");
    text("Choose your character. ",displayWidth/2-110,displayHeight/2);
    boy.addImage(boyImg);
    girl.addImage(girlImg);
     if(mousePressedOver(girl)){
      girlA=createSprite(displayWidth/3-320,displayHeight/2-100,50,200);
      girlA.scale=2;
      
      girlA.addAnimation("walking",girlAnimation);
     // girlA.visible=true;
     boy.destroy();
     girl.destroy();
      gameState=2;
      console.log("girl");
      girlA.depth=road.depth+1;
      character=girlA;

    }
    if(mousePressedOver(boy)){
      boyA=createSprite(displayWidth/3-320,displayHeight/2-100,50,200);
      boyA.scale=2;
      boyA.addAnimation("walking",boyAnimation);
     // girlA.visible=true;
     boy.destroy();
     girl.destroy();
      gameState=2;
      console.log("girl");
      boyA.depth=road.depth+1;
      character=boyA;
    }
  }
  if(gameState===2){
    form.hide();
   
    //boy.destroy();
    //girl.destroy();
    background(255);
   
    road.scale=3;
    console.log(road.depth);
    road.visible=true;
    hospital1=createSprite(displayWidth/4,100,50,100);
    hospital1.addImage(hospitalImg);
    
   if(keyWentDown(RIGHT_ARROW)){
    character.velocityX=2;
   } 
   if(keyWentUp(RIGHT_ARROW)){
    character.velocityX=0;
   } 
   if(keyWentDown(LEFT_ARROW)){
    character.velocityX=-2;
   } 
   if(keyWentUp(LEFT_ARROW)){
    character.velocityX=0;
   } 
   if(keyWentDown(DOWN_ARROW)){
    character.velocityY=2;
   } 
   if(keyWentUp(DOWN_ARROW)){
    character.velocityY=0;
   } 
   if(keyWentDown(UP_ARROW)){
    character.velocityY=-2;
   } 
   if(keyWentUp(UP_ARROW)){
    character.velocityY=0;
   } 
    

    
  }
  drawSprites(); 

}



