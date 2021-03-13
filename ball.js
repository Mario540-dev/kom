class ball{
    constructor(x, y, r) {
        var options = {
            
    
            'frictionAir':0.0009,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
      
      this.r=r
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        // to push ne setting in this class only.
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue")
        stroke("red");
        strokeWeight(3);
        ellipse( 0, 0, this.r );
        pop();
      }
}



