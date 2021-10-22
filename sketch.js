
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj; 

function preload()
{
	
}

function setup() {
	createCanvas(950, 450);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,420,10,ball_options);
	World.add(world, ball);

	groundObj = new Ground(width/2,400,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  Engine.update(engine);

  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,10)

  

  drawSprites();
 
}



