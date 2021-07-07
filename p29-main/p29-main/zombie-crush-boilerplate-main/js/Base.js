class Base{
    constructor(x,y,width,height) {
        var options ={
            isStatic:true
        };
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }
    show()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.w,this.h);
        pop();
    }
    
}