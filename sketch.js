var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  player = new player(width/2,height-75);

  for(var i=0;i,6;1++){
    var bottomGrass1 = createSprite(683,height-50(i*400),width,);
    
  
   if(i%2===0)
 {
  var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
  road.shapecolor="black"
}
bottomGrass1.shapecolor = "green"
  }
  
   for(var i=6; i < 40;i++){
      car = new car(2)
   } 

  }

function draw() {
  background("skyblue");
 
 

  
  drawSprites();
}
function keyPressed(){
  if(keyCode == UP_ARROW){
   player.move(0,-2);
}

else if(keyCode == DOWN_ARROW){
  player.move(0,2);
}     

else if(keyCod == LEFT_ARROW){
  player.move(-2,0);
}     

else if(keyCod == RIGHT_ARROW){
  player.move(2,0);
}     


}