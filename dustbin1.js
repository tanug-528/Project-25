class Dustbin1{


    constructor(x,y,width,height){
        var options={'isStatic':false, 'restitution':0.3,'friction':0.5,'density':1.2}
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/dustbin.jpeg");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        fill(255,255,255);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }  
}