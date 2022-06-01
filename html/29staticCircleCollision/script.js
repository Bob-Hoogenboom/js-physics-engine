const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht
let A, B, C, l, m, AToB, AToC, AToD;

A = new Point(100,100,10,"red", true, "A");
B = new Point(200,200,10,"orange", true, "B");
C = new Point(300,300,5,"yellow", true, "C");

l = new LinearFunction(2,100);
m = new LinearFunction(2,300);

AToB = new Vector2d(B.x - A.x, B.y - A.y);
AToC = new Vector2d(C.x - A.x, C.y - A.y);
AToD = new Vector2d(-AToC.dy,AToC.dx);

anime();


function anime(){
  context.clearRect(0,0,width, height);
  requestAnimationFrame(anime,1);

  l.throughTwoPoints(A,B);
  l.draw(context, "green");

  m.throughTwoPoints(A,C);
  m.draw(context, "blue");

  A.draw(context);
  B.draw(context);
  C.draw(context);


  AToB.dx = B.x - A.x;
  AToB.dy = B.y - A.y;

  AToC.dx = C.x - A.x;
  AToC.dy = C.y - A.y;

  AToD.dx = -AToC.dy;
  AToD.dy = AToC.dx

  AToC.magnitude = 1;
  AToC.magnitude = AToC.magnitude * AToB.dotProduct(AToC)

  AToD.magnitude = 1;
  AToD.magnitude = AToD.magnitude * AToD.dotProduct(AToB);

  AToB.draw(A.x,A.y, "white",1);
  AToC.draw(A.x,A.y, "grey",1);
  AToD.draw(A.x,A.y,"black",1);

  //mathametical name: 'dot product'

}
