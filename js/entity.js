//Im really fucking cool for documenting this

//A shared class for player(s)? and enemies
class Entity {
  constructor(x, y, color, speed, hp, fireDelay, bulletSpeed, inaccuracy, isPlayer) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.hp = hp;
    this.fireDelay = fireDelay;
    this.bulletSpeed = bulletSpeed;
    this.inaccuracy = inaccuracy;
    this.isPlayer = isPlayer;
    //Array of bullet objects belonging to this object
    this.bulletArray = [];
    this.target = entities[0];
    //Used for keeping time, eg. for firing
    this.elapsedFrames = 0;
  }
  update() {
  //Main function of the entity object, called every frame
    //Decides whether the entity should behave like a player or an enemy
    if (this.isPlayer === true) {
      this.target = {x:mouseX, y:mouseY}
      this.control();
    } else {
      //Entities [0] is the player object
      this.target = entities[0];

      this.navigate();
    }
    this.drawAll();
    //Upadtes the entity's bullets, if they exist
    let removeIndex = 0;
    if (this.bulletArray.length > 0){
      for (let bullet in this.bulletArray){
        this.bulletArray[bullet].update();
        if (this.bulletArray[bullet].shouldExist == false){
          this.bulletArray.splice(bullet, 1);
        }
      }
    }
    //Adds to elapsed frames
    this.elapsedFrames++;
    //Draws the entity as a circle
    fill(0);
  }
  control() {
  //Method for controlling the player character
    if (keyIsPressed) {
      if (keyIsDown(65)) this.x -= this.speed; //Left
      if (keyIsDown(68)) this.x += this.speed; //Right
      if (keyIsDown(87)) this.y -= this.speed; //Up
      if (keyIsDown(83)) this.y += this.speed; //Down
    }
    //Shoot if mouse is pressed, ammo is positive and the fireDelay has elapsed
    if (this.elapsedFrames >= this.fireDelay && mouseIsPressed == true){
      this.shoot();
      this.elapsedFrames = 0;
    }
  }
  navigate() {
  //Method made to apply behaviour to enemies
    let dir = getDirectionNorm(this.target.x, this.target.y, this.x, this.y)
    this.x += dir.x*this.speed*random(-0.6,1.8);
    this.y += dir.y*this.speed*random(-0.6,1.8);
    
    if (this.elapsedFrames >= this.fireDelay){
      this.shoot();
      this.elapsedFrames = 0;
    }
  }
  shoot() {
    //Gun kickback, basically
    let offset = random(-this.inaccuracy, this.inaccuracy)
    let dir = getDirectionNorm(this.target.x+offset, this.target.y+offset, this.x, this.y)
    this.x -= dir.x*this.speed*random(-0.6,4);
    this.y -= dir.y*this.speed*random(-0.6,4);

    let b = new Bullet(this.x, this.y, 10, this, this.bulletSpeed, dir);
    this.bulletArray.push(b);
  }
  drawAll(){
    rectMode(RADIUS);
    //Hp bar
    fill(255,0,0);
    rect(this.x, this.y-30, this.hp/5, 5);
    //Can shoot
    fill(0,0,255); 
    rect(this.x, this.y-40, constrain(this.elapsedFrames/this.fireDelay, 0, 1)*20, 5);
    //Player
    fill(this.color);
    circle(this.x, this.y, 20);

    rectMode(CORNER);
  }
}
//Utility functions, not neccesarily just for entities
function getDirectionNorm(x1, y1, x2, y2){
  let dx = (x1 - x2);
  let dy = (y1 - y2);
  let v = new p5.Vector(dx, dy);
  let dxn = dx/v.mag();
  let dyn = dy/v.mag();

  return({x:dxn, y:dyn})
} 