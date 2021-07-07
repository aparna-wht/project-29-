const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var ground,leftWall,rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height-10,width*2,20);
  leftWall = new Base(-100,height/2+50,600,100);
  rightWall = new Base(width+100,height/2+50,600,100);

  bridge = new Bridge(23,{x:width/2-700,y:height/2});
  jointPoint = new Base(width-200,height/2+10,40,20);

 Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  leftWall.show();
  rightWall.show();
  bridge.show();
  jointPoint.show();

  for (var stone of stones) {
    stone.show();
  }





}
