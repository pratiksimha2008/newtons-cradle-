const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

let ball1;
let ball2;
let ball3;
let ball4;
let ball5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	ball_options={
		isStatic:false,
		restitution:0.5,
	}

	ball1=Bodies.circle(215,50,20,ball_options);
	ball2=Bodies.circle(215,60,20,ball_options);
	ball3=Bodies.circle(215,70,20,ball_options);
	ball4=Bodies.circle(215,80,20,ball_options);
    ball5=Bodies.circle(215,90,20,ball_options);	

 var options= {
	 bodyA: Bodies,
	 bodyB:ball1,
	 stiffness : 0.04 ,
	 length:10
 }
 var chain = Constraint. create(options);
 world.add(world.chain);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here 
constrainedlog.display   
  //create ellipse shape for multiple bobs here
ellipse (ball1.position.x,ball1.position.y,10,10);
allipse(ball2.position.x,ball2.position.y,20,20);
ellipse(ball3.position.x,ball3.position.y,20,20);
ellipse(ball4.position.x,ball4.position.y,20,20);
ellipse(ball5.position.x,ball4.position.y,20,20);

keypressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keypressed(){
if (keyDown("UP ARROW")){
	ball1.velocityX=7;
	
}
}
