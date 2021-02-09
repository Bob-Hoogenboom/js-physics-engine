class GameObject {
  constructor(pos,vel,acc,rad,color) {
    this.pos = pos;  //position;
    this.vel = vel;  //velocity;
    this.acc = acc;  //acceleration;
    this.radius = rad || 10;
    this.color = color || "black";
  }
  update(){
    this.vel.vectorSum(this.vel,this.acc);
    this.pos.vectorSum(this.pos,this.vel);
    if(this.pos.dy>height){
        this.vel.dy = -this.vel.dy;
        this.pos.dy = height;
    }
    if(this.pos.dy<0){
        this.vel.dy = -this.vel.dy;
        this.pos.dy = 0;
    }
    if(this.pos.dx>width){
        this.vel.dx = -this.vel.dx;
        this.pos.dx = width;
    }
    if(this.pos.dx<0){
        this.vel.dx = -this.vel.dx;
        this.pos.dx = 0;
    }
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
  }
}
