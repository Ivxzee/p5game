var player;
var enemies = []; // Array cotaining enemy objects
var waveCount = 0;

var doshit = true;  //Deal with it

function setup() {
  createCanvas(windowWidth, windowHeight*0.8);
  let p = entityType["player"];
  player = new Entity(map(p.x,0,100,0,width),map(p.y,0,100,0,height),p.color,p.speed,p.hp,p.fireDelay,p.bulletSpeed,p.isPlayer);
  generateEnemies();
  frameRate(144); 
  //x, y, color, speed, hp, ammo, fireDelat, isPlayer;
}
function draw() {
  background(220);

  if (doshit == true){
  player.update();
    for (let i = 0; i < enemies.length; i++){
      enemies[i].update();
    }
  }
}
function pause(){
  if (doshit == true){
    doshit = false;
  } else {
    doshit = true;
  }
  console.log(doshit)
}