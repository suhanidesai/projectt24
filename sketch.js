
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var box1
var box2
var box3
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;
ground=new Ground(400,690,800,10)
box1=new Box(525,670,20,200)
box2=new Box(723,670,20,200)
box3=new Box(615,680,200,20)
ball=new Ball(100,680,50)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 box1.display()
 box2.display()
 box3.display()
 ball.display()
}
function keyPressed(){
if(keyCode==UP_ARROW)
{
Matter.Body.applyforce(ball.ball,ball.ball.position,{
x:100,y:-100
})
}
}

