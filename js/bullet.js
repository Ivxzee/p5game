// Started at 18-05-2022
// Made by one 16 year old dev wannabe

class Bullet {
  constructor(x, y, damage, origin, speed, dir){
    this.x = x;
    this.y = y;
    this.damage = damage;
    //The owner of the bullet
    this.origin = origin;
    this.speed = speed;
    this.dir = dir;
    
    this.shouldExist = true;   
  }

  update(){
    //The bullet class is simple, so I won't branch it ou
    this.x += this.dir.x*this.speed;
    this.y += this.dir.y*this.speed;
    
    if ((this.x > width || this.x < 0 || this.y > height || this.y < 0)){
      this.shouldExist = false;
    }
    fill(0);
    circle(this.x, this.y, 10);
    this.collide();
  }
  collide(){
    for (let i=0; i<entities.length; i++){
      let e = entities[i];
      if (sqrt(sq(e.x-this.x)+sq(e.y-this.y)) < 20 && entities[i].isPlayer != this.origin.isPlayer){
        console.log(sqrt(sq(e.x-this.x)+sq(e.y-this.y)))
        e.hp  -= this.damage;
        this.shouldExist = false;
      }
    }
  }
}