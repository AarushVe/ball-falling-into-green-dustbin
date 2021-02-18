
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, dustbinImg, dustbinSprt;	
var world;
var paper;

function preload() {
dustbinImg = loadImage("trashcangreen.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	dustbinSprt = createSprite(1200, 650);
	dustbinSprt.addImage(dustbinImg);
	dustbinSprt.scale = 1.6;

	paper = new Paper(150, 120, 40);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  //dustbinObj.display();
  paper.display();

drawSprites();
}

function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y: -85} );
	}
}

