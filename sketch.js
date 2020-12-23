
var  thickness, wall;
var bullet, speed, weight;




function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight= random(400,1500);

  bullet= createSprite(50,200,30,10);
  wall= createSprite(1220,200,thickness,height/2);
wall.shapeColor=(80,80,80);
bullet.velocityX=speed;
thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
}

function draw() {
  background("black");  
  var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness);
if(hasCollided (bullet, wall))
 
if(damage>10)
{
  wall.shapeColor= color(255,0,0);
}


if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}

  drawSprites();
}
function hasCollided(bullet, wall){
var bulletRightEdge, wallLeftEdge;
wallLeftEdge= createSprite(100,10,10,2);
bulletRightEdge = createSprite(1200,100,10,2);
 
bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>= wallLeftEdge){
return true;
  }
  return false;
}