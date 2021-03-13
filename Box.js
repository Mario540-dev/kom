class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
          // how bouncy
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        // to push ne setting in this class only.
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        stroke("blue");
        strokeWeight(3);
        rect( 0, 0, this.width, this.height);
        
        pop();
      }
}