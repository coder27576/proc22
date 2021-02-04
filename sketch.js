var fairy,fairyAnimation,star,starImage;
var joyMusic,starNight,starNightImage;
var fairyHand;

function preload(){
   //preload the images here
  fairyAnimation=loadAnimation("fairyImage1.png","fairyImage2.png");
  starImage=loadImage("star.png");
  starNightImage=loadImage("starNight.png");
  joyMusic=loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  fairy=createSprite(300,500,10,10);
  fairy.addAnimation("fairyFlying",fairyAnimation);
  fairy.scale=0.3;
  // fairyHand=createSprite(,10,10);
  // fairyHand.visible=false;
  // fairyHand.debug=true;


  star=createSprite(700,50,10,10);
  star.addImage(starImage);
  star.scale=0.3;

  starNight=createSprite(400,325);
  starNight.addImage(starNightImage);
  starNight.scale=0.5;

}


function draw() {
  background("black");

  if(keyDown(RIGHT_ARROW)){
    fairy.x+=3;
  }
  if(keyDown(LEFT_ARROW)){
    fairy.x-=3;
  }
  // fairyHand.depth=starNight.depth;
  // fairyHand.depth++;
  fairy.depth=starNight.depth;
  fairy.depth++;

  star.depth=starNight.depth;
  star.depth++;

  if(star.y>=490){
    star.x=fairy.x+155;
    star.y=fairy.y-10;
    joyMusic.play();
  }

  if(keyDown(DOWN_ARROW)){
    star.velocityY=5;
  }

   drawSprites();
 
}
