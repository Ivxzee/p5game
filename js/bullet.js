// Started at 18-05-2022
// Made by one 16 year old dev wannabe

class Bullet {
  constructor(x, y, damage, origin, speed){
    this.x = x;
    this.y = y;
    this.damage = damage;
    //The owner of the bullet
    this.origin = origin;
    this.speed = speed;
    

    this.shouldExist = true;
    //The bullet's direction
    this.dx = mouseX - this.x;
    this.dy = mouseY - this.y;
    //Might make speed a constructed variable
    this.speed = 10;
    
  }

  update(){
    //The bullet class is simple, so I won't branch it ou
    let sv = new p5.Vector(this.dx, this.dy);
    this.y += (this.dy/sv.mag())*this.speed;
    this.x += (this.dx/sv.mag())*this.speed;
    
    if ((this.x > width || this.x < 0 || this.y > height || this.y < 0)){
      this.shouldExist = false;
    }
    fill(0);
    circle(this.x, this.y, 10);
  }
}