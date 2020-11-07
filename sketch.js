const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var boxes=[];
var boundaries=[];

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
    
   boundaries.push(new Boundary(100,height-50,width,20,0.3));
   boundaries.push(new Boundary(300,height/3,width,20,-0.6));
  
  
}

//when mouse is dragged only get a box
function mouseDragged(){
    boxes.push(new Box(mouseX,mouseY,random(5,20)));
}


function draw(){
    background(10);

    Engine.update(engine);
    fill("grey");


    
    //adding multiple boxes through for loop
    for(var i=0; i<boxes.length; i++){
      boxes[i].show();
    }
    
    for(var i=0; i<boundaries.length; i++){
        boundaries[i].show();
      }
   
}