
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gry;
var trash;

var base1,base2,base3;
var grt

function setup() {
	createCanvas(1800, 600);


	engine = Engine.create();
	world = engine.world;
	
  gry = new Ground(750,550,1800,10)
	trash = new Paper(10,450,100);
	base1 = new dustBin(1420,473,200,200);
	
  
	
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
 
 
   gry.display()
   trash.display();
   base1.display();
   
   keyPressed();
   drawSprites();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
  Matter.Body.applyForce(trash.body,trash.body.position,{x:85.3,y:-84.3})
	}
}



