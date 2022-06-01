/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/

class Point {

		// hier komt de constructor
    constructor(x,y,radius,color,draggable,label){
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.draggable = draggable || false;
      console.log(this.x,this.y,this.radius);
      this.label = label || ""

      if(draggable){
        this.drag();
      }
    }


    get position(){
      let ans = new Vector2d(this.x, this.y);
      return ans;
    }

    get vPos(){
      return new Vector2d(this.x,this.y);
    }

    set vPos(vector){
        this.x = vector.dx;
        this.y = vector.dy;
    }

    drag(){

      let mouse = {};
      let distance;
      let dragging = false;


      addEventListener('mousedown',(evt) =>{
        mouse.x = evt.clientX;
        mouse.y = evt.clientY;

        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < this.radius){
          dragging = true;
        }
        else{
          dragging=false;
        }
      })

      addEventListener('mouseup',()=>{
        dragging = false;
      })

      addEventListener('mousemove',(evt) =>{
        if(dragging){
          this.x = evt.clientX;
          this.y = evt.clientY;
        }
      })

    }

  draw(context,color){
    context.strokeStyle = color || "black";

    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.radius,0,Math.PI*2);
    context.stroke();
    context.fill();
    context.fillStyle = "white";
    context.font = "20px arial";
    context.fillText(this.label, this.x, this.y - 1.2*this.radius);
  }

  printText(){
    context.font = this.font;
    context.fillText(this.text, this.x, this.y - 1.2*this.radius);
  }

  Update(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color
    console.log(this.x,this.y,this.radius);

  }
}
