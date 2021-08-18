var bg_img, spacecraft1_img, spacecraft2_img, spacecraft3_img, spacecraft4_img, iss_img;
var bg, iss, spacecraft;
var hasDocked = false;
//var gameState = start;

function preload(){
  bg_img = loadImage("spacebg.jpg");
  spacecraft1_img = loadImage("spacecraft1.png");
  spacecraft2_img = loadImage("spacecraft2.png");
  spacecraft3_img = loadImage("spacecraft3.png");
  spacecraft4_img = loadImage("spacecraft4.png");
  iss_img = loadImage("iss.png");
}

function setup() {
  createCanvas(626,460);
  bg = createSprite(313, 205);
  bg.addImage(bg_img);

  spacecraft = createSprite(313,335);
  spacecraft.scale = .23;
  spacecraft.addImage(spacecraft1_img);

  var iss = createSprite(275,200);
  iss.scale = .75;
  iss.addImage(iss_img);
}

function draw() {
  background(0);  

  //text("Hint: Open Console and try to get to x: 224 and y: 274", 100, 450);

  if(!hasDocked){
   spacecraft.x = spacecraft.x + random(-1,1);
    
    //left
    if(keyDown("left")){
      spacecraft.x -= 1;
      spacecraft.addImage(spacecraft4_img);
    }

    //right
    if(keyDown("right")){
      spacecraft.x += 1;
      spacecraft.addImage(spacecraft3_img);
    }

    //up
    if(keyDown("up")){
      spacecraft.y -= 1;
      spacecraft.addImage(spacecraft2_img);
    }
    
    //down
    if(keyDown("down")){
      spacecraft.y += 1;
      spacecraft.addImage(spacecraft1_img);
    }

    //no moving
    if(!keyDown("up")&&!keyDown("down")&&!keyDown("left")&& !keyDown("right")){
      spacecraft.addImage(spacecraft1_img);
    }
  }

  console.log("x" + spacecraft.x);
  console.log("y" + spacecraft.y);

  if(spacecraft.y <= 274 && spacecraft.x <= 224){
    hasDocked = true; 
    textSize(25);
    fill("white");
    text("Docking Successful",313,450);
  }

  //if(spacecraft.x === 224 && spacecraft.y === 274){
    //fill("white");
    //textSize(25);
    //text("Docking Successful",313,450);
  //}

  drawSprites();
}