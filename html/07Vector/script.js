const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C;
let D,E,F;
let d,e,f;
let trans;

A = new Point(200,100,10,"red",true);
B = new Point(300,300,10,"green",true);
C = new Point(400,100,10,"yellow",true);

D = new Point(500,100,10,"black",false);
E = new Point(600,300,10,"dark_grey",false);
F = new Point(700,100,10,"grey",false);

d = new Vector2d()
e = new Vector2d()
f = new Vector2d()

trans = new Vector2d(500,0)


function anime(){
  context.clearRect(0,0,width,height);
  context.beginPath();
  context.fillStyle = "rgba(0,0,255,.5)";
  context.moveTo(A.vPos.dx,A.vPos.dy);
  context.lineTo(B.vPos.dx,B.vPos.dy);
  context.lineTo(C.vPos.dx,C.vPos.dy);
  context.closePath();
  context.stroke();
  context.fill();

  A.draw(context);
  B.draw(context);
  C.draw(context);

  d.vectorSum(A.vPos,trans);
  e.vectorSum(B.vPos,trans);
  f.vectorSum(C.vPos,trans);

  D.vPos = d;
  E.vPos = e;
  F.vPos = f;

  D.draw(context);
  E.draw(context);
  F.draw(context);

}

setInterval(anime,10)
