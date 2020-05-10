const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var wall1;
var tower1;


function setup() {
  engine=Engine.create();
world=engine.world;
  createCanvas(500,500);
  ground = new Ground(250,480,500,40);
  tower1 = new Wall(100,470,40,200);
  wall1 = new Wall(190,475,280,50);
  wall2 = new Wall(230,425,220,50);
  wall3 = new Wall(230,375,190,50);
  tower2 = new Wall(385,470,40,200);
  
}

function draw() 
{
  Engine.update(engine);
  background("aqua"); 
  ground.display();
  tower1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  tower2.display();
  
}