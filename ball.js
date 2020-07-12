class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
     
     
      this.body = Bodies.circle(x, y,20, options);
      this.image=loadImage("sprites/paper.png")
      this.radius =20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      strokeWeight(3);
      stroke("black");
      fill("pink");
      image(this.image,0, 0,this.radius, this.radius);
      pop();
     }
      }
     













  