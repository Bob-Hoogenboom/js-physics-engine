const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,D,S,f,l; //f is a line A-B  l =

A = new Point(200,200,10,"red",true);
B = new Point(400,400,10,"green",true);
C = new Point(200,400,10,"yellow",true);
D = new Point(400,200,10,"blue",true);
S = new Point(0,0,5,"grey",false); //is the center point of the lines and should not be draggable

f = new LinearFunction(1,1); //makes slope f
l = new LinearFunction(1,1); //makes slope l


function anime(){
  context.clearRect(0,0,width,height)

  S.x = f.intersection(l).x;
  S.y = f.intersection(l).y;
  S.draw(context); //draws the point were the lines cross

  f.slope = (A.y - B.y)/ (A.x - B.x);
  f.intercept = A.y - A.x *f.slope;
  f.draw(context); //draws the line between A & B

  l.slope = (C.y - D.y) / (C.x - D.x);
  l.intercept = C.y - C.x *l.slope;
  l.draw(context); //draws the line between C & D

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

}

 setInterval(anime,10);
