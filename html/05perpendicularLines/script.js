const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,l,m;
A = new Point(200,300,10,"red",true)
B = new Point(500,400,10,"blue",true)
C = new Point(200,500,10,"yellow",true)
l = new LinearFunction(1,1);
m = new LinearFunction(1,1);

function anime(){
  context.clearRect(0,0,width,height);
  A.draw(context);
  B.draw(context);
  C.draw(context);

  l.slope = (B.y - A.y)/(B.x - A.x); //berekent de juiste helling
  l.intercept = B.y - B.x * l.slope; //berekent de plek van de punten waar de lijn moet komen
  l.draw(context); //tekent de lijn (l)

  m.slope = -1/l.slope;
  m.intercept = C.y - C.x * m.slope;
  m.draw(context);
}

setInterval(anime,10);
