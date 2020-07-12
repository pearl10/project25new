class Bin {
    constructor(x, y,width, height,angle) {
      var options = {
         
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y,width , height, options);
      this.width =width;
      this.height = height;
      this.image=loadImage("sprites/dustbingreen.png");
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      push();
      translate(pos.x, pos.y);
     
      imageMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("blue");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  