const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
let A, B, Arrow, Dx, Dy;

A = new Point(100,100,10,"cyan",true,"A");
B = new Point(500,100,10,"blue",true,"B");

Arrow = {};

Arrow.sh = 10;
Arrow.sw = 100;
Arrow.hh = 25;
Arrow.hw = 50;
Arrow.color = "rbga(0,255,0,0.5)";

Arrow.draw = function(){
  context.beginPath();
  context.fillStyle = Arrow.color;
  context.moveTo(0,0);
  context.lineTo(0,Arrow.sh);
  context.lineTo(Arrow.sw,Arrow.sh);
  context.lineTo(Arrow.sw,Arrow.hh);
  context.lineTo(Arrow.sw + Arrow.hw,0);

  context.lineTo(Arrow.sw,-Arrow.hh);
  context.lineTo(Arrow.sw,-Arrow.sh);
  context.lineTo(0,-Arrow.sh);
  context.closePath();
  context.fill();
  context.stroke();
}


anime();


function anime(){
  Dx = B.x - A.x;
  Dy = B.y - A.y;


  context.clearRect(0,0,width,height);
  window.requestAnimationFrame(anime);
  A.draw(context,"cyan");
  B.draw(context,"blue");
  context.save();
  context.translate(A.x,A.y);
  context.rotate(Math.atan2(Dy,Dx));
  Arrow.draw();
  context.restore();


}
