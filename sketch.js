
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, trash;
var rectangle1,rectangle2, rectangle3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//let's first make a paper
	paper = new Paper(400,600);
	paper.shapeColor=color(255,192,203);

	rectangle1=new Dustbin(400,650,200,20);
	rectangle1.shapeColor=color(255,255,255);

	rectangle2=new Dustbin(310,600,20,100);
	rectangle2.shapeColor=color(255,255,255);

	rectangle3=new Dustbin(490,600,20,100);
	rectangle3.shapeColor=color(255,255,255);

	ground= new Ground(400,690,800,10);
	ground.shapeColor=color(0,255,0);

	trash = new Dustbin1(200,600,50,50);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:5});
	}

}




function draw() {
  rectMode(CENTER);
  background(121);
  
  paper.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  ground.display();
  trash.display();
  drawSprites();
 
}



