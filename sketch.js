const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var backgroundImg;
var snow,snowImg,snow1;
var world;
var snows = [];
var boy,boyImg;
var invGround;
var soundsnow;
var jump=0;

function preload(){
  backgroundImg=loadImage("snow1.jpg");
  snowImg=loadImage("snow4.webp");
  boyImg=loadImage("boy.png");
  soundsnow=loadSound("snowsound.wav");
}

function setup(){
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  boy=createSprite(500,240);
  boy.addImage(boyImg);
  boy.scale=0.23;

  invGround=createSprite(500,320,80,5);
  invGround.visible=false;

  soundsnow.play();

  Engine.run(engine);
}

function draw(){
  background(backgroundImg);

  if(frameCount%10===0){
    snows.push(new Snow(random(10,790),0,random(20,40)));
  }

  if(frameCount)
  
  for (var k = 0; k < snows.length; k++){
    snows[k].display();
  }

  if(boy.y>222){
    boy.velocityY=-13;
    jump=jump+1;
    if(jump%4===0){
      soundsnow.play();
    }
  }

  boy.velocityY=boy.velocityY+0.66;

  boy.collide(invGround);

  drawSprites();

  textSize(35);
  fill("black");
  text("Snowfall Animation",270,370);
}