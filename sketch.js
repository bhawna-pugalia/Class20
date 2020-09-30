
var frect,mrect;
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 50);
  frect.shapeColor="green";
  mreact=createSprite(200,200,30,30);
  mrect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  drawSprites();
}