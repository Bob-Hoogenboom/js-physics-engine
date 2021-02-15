const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,ab,bc,ca,altitudeab,altitudebc,altitudeca;



A = new Point(200,200,10,"red",true,"A");
B = new Point(300,400,10,"green",true,"B");
C = new Point(400,201,10,"blue",true,"C");

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);

altitudeab = new LinearFunction(1,1);
altitudebc = new LinearFunction(1,1);
altitudeca = new LinearFunction(1,1);


function anime(){
  context.clearRect(0,0,width,height);
  context.fillStyle = "rgba(255,255,0,0.4)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  context.fill();

  ab.slope =(B.y - A.y)/(B.x - A.x);
  ab.intercept = B.y - B.x*ab.slope;
  ab.draw(context);

  bc.slope =(C.y - B.y)/(C.x - B.x);
  bc.intercept = C.y - C.x * bc.slope;
  bc.draw(context);

  ca.slope =(A.y - C.y)/(A.x - C.x);
  ca.intercept = A.y - A.x * ca.slope;
  ca.draw(context);

  altitudeab.slope = -1/ab.slope;
  altitudeab.intercept = C.y - C.x*altitudeab.slope;
  altitudeab.draw(context);

  altitudebc.slope = -1/bc.slope;
  altitudebc.intercept = A.y - A.x*altitudebc.slope;
  altitudebc.draw(context);

  altitudeca.slope = -1/ca.slope;
  altitudeca.intercept = B.y - B.x*altitudeca.slope;
  altitudeca.draw(context);


  A.draw(context);
  B.draw(context);
  C.draw(context);

}

setInterval(anime,10)
