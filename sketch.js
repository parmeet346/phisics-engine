const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,myworld,box,ball;
function setup() {
  createCanvas(400,400);
myengine = Engine.create()
myworld = myengine.world
var options = {isStatic:true}
box = Bodies.rectangle(200,370,400,20,options)
World.add(myworld,box)
var ballopt = {restitution:0.5}
ball = Bodies.circle(100,100,50,ballopt)
World.add(myworld,ball)
console.log(box)
}

function draw() {
  background("black"); 
  Engine.update(myengine)
  rectMode(CENTER) 
  

  
  circle(ball.position.x,ball.position.y,50)
}