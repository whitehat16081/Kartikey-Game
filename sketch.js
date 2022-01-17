var score=0;
var gun,bottle,background,bullte;

var gunImg,bottleImg,backgroundImg,buttleImg;

var bottlegroup,bulltegroup;


var life=3;
var score=0;
var gameState=1;


function preload() {

gunImg = loadImage("g3.png")
bottleImg = loadImage("blue_bottle.png")
backgroundImg = loadImage("background_img.jpg")
bullteImg = loadImage("gun_img.png")
boxImg = loadImage("box2_img.png")
ballImg = loadImage("ball.png")
}

function setup () {
createCanvas(1500,730);

  //backBoard= createSprite(50, width/2, 100,height);
  //backBoard.addImage(backgroundImg)
  
  gun=createSprite(width/2, height-200, 50,50);
  gun.addImage(gunImg)
  gun.scale=1;
  
 // bulletGroup = createGroup();   
  //bottleGroup = createGroup();   
  
  
  
  }

  function draw() {
    background("#BDA297");
    

    
  
   //gun.x=World.mouseX;
     //gun.y=World.mouseY ; 
  
      
        drawbluebottle();
      
  
     
        drawbox();
      
  
      if(keyDown("space")){
        //shootBullet();
      }
  
  
   
drawSprites();
    }

    function drawbluebottle(){
      if (frameCount % 90 === 0) {
        bluebottle=createSprite(1500,100,20,20);
        bluebottle.addImage(bottleImg)
      bluebottle.velocityX=-3;
      bluebottle.y=Math.round(random(100,height-300));
      bluebottle.scale=0.7;
      }
    }

    function drawbox(){
      if (frameCount % 140 === 0) {
        box=createSprite(1500,300,20,20);
        box.addImage(boxImg)
      box.velocityX=-3;
      box.y=Math.round(random(100,height-300));
      box.scale=0.7;
      }
    }




