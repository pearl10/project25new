
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var log2;
var ground;
function preload(){

}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	
	ground=new Ground(400,680,800,40)
	ball=new Ball(175,675);
	
	Log2=new Bin(650,660,120,250,20);

}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 ball.display();
 
 Log2.display();
 
 ground.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});


}







}



