class Paper{
  
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
}
this.body = Matter.Bodies.circle(x,y,70);
this.radius=70;
this.image=loadImage("sprites/paper.png")
World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        fill(255,192,203);
        image(this.image,0,0,this.radius,this.radius)
        pop();
        
    }
};