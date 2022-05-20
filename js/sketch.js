var player;
var entities = []; // Array cotaining entity objects
var waveCount = 0;

var doshit = true;  //Deal with it

function setup() {
  createCanvas(windowWidth, windowHeight*0.8);
  let p = entityType["player"];
  entities[0] = new Entity(map(p.x,0,100,0,width),map(p.y,0,100,0,height),p.color,p.speed,p.hp,p.fireDelay,p.bulletSpeed,p.inaccuracy,p.isPlayer);
  generateEnemies();
  frameRate(144); 
  //x, y, color, speed, hp, ammo, fireDelat, isPlayer;
}
let delay = 0;
function draw() {
  background(220);

  if (doshit == true){

    for (let i = 0; i < entities.length; i++){
      entities[i].update();
      if (entities[i].hp < 0){
        console.log("fuck")
        entities.splice(i,1);
      }
    }
    if(entities.length == 1){
      delay++

      if(delay>120){
        waveCount++;
        generateEnemies();
        delay=0;
      }
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
