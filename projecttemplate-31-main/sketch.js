const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops=[];
var rand;
var maxDrops=100;
var thunderCreatedFrame=0;
var cloud,cloudI;
var cloud2,c3,c4;
function preload(){
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4=loadImage("thunderbolt/4.png");
    cloudI=loadImage("cloud.png");}
function setup(){
   createCanvas(400,700);
   engine=Engine.create();
   world=engine.world;
   umbrella=new Umbrella(200,500);
  
   /*cloud=createSprite(50,10,30);
   cloud.addImage(cloudI);
  // cloud.isStatic=true;
  cloud.scale=0.13;
  cloud2=createSprite(210,10,30);
   cloud2.addImage(cloudI);
  // cloud.isStatic=true;
  cloud2.scale=0.13;
  c3=createSprite(370,10,30);
   c3.addImage(cloudI);
  // cloud.isStatic=true;
  c3.scale=0.13;*/
   if(frameCount % 150 === 0){
       for(var i=0;i<maxDrops;i++){
           drops.push(new creatingDrop(random(0,400),random(0,400)));}
    }
}
function draw(){
   Engine.update(engine);
   background(0);
   rand=Math.round(random(1,4));
   if(frameCount%80 === 0){
       thunderCreatedFrame=frameCount;
       thunder=createSprite(random(10,370),random(10,30),10,10);
       switch(rand){
           case 1:thunder.addImage(thunder1);
           break;
           case 2:thunder.addImage(thunder2);
           break;
           case 3:thunder.addImage(thunder3);
           break;
           case 4:thunder.addImage(thunder4);
           break;
           default: break;  }
       thunder.scale=random(0.3,0.6) }
   if(thunderCreatedFrame+ 10 === frameCount && thunder){
       thunder.destroy(); }
   umbrella.display();
   for(var i=0;i<maxDrops;i++){
       drops[i].showDrop();
       drops[i].updateY(); }
   drawSprites();
}   

/*function keyPressed(){
    if(keyCode === 77){
       // slingshot.attach(bird.body);
       umbrella=umbrella+3;
    }
}*/