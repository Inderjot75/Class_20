var mrect, frect;




function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 50);
  frect.shapeColor = "red";
  
  mrect = createSprite(100,200,50,50);
  mrect.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  
  mrect.x = mouseX;
  mrect.y = mouseY;

  if(mrect.x - frect.x < mrect.width/2 + frect.width/2 && 
    frect.x - mrect.x < mrect.width/2 + frect.width/2 &&
    mrect.y - frect.y < mrect.height/2 + frect.height/2 &&
    frect.y - mrect.y < frect.height/2 + mrect.height/2)
  {
    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  }
  else
  {
    mrect.shapeColor = "lightblue";
    frect.shapeColor = "lightblue";
  }
  
  
  drawSprites();
}