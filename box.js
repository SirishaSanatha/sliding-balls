function Box(x,y,w){

    var options={
        friction :0,
        restitution :0.6
    }

    this.body=Bodies.circle(x,y,w,options);
    
    this.w=w;
    //this.h=h;
    World.add(world,this.body);

    this.show=function(){
    var pos= this.body.position;
    var angle=this.body.angle;

    push ();

    translate(pos.x,pos.y);
    rotate(angle);
    ellipse(0,0,this.w*2);

    pop ();
}

}