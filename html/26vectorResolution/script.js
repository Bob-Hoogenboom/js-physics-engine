const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht
let A, B, posA, posB, difAB, difX, difY;
//constructor(x,y,radius,color,draggable,label){
A = new Point(0.3*width, 0.4*height, 15, "red", true, "A")
B = new Point(0.6*width, 0.8*height, 15, "orange", true, "B")

posA = new Vector2d(A.x, A.y);
posB = new Vector2d(B.x, B.y);

difAB = new Vector2d(B.x - A.x, A.y-B.y);

difX = new Vector2d(B.x - A.x, 0);
difY = new Vector2d(0, B.y - A.y);

anime();

function anime(){
  context.clearRect(0,0,width, height);
  requestAnimationFrame(anime,1);
  posA.dx = A.x;
  posA.dy = A.y;

  posB.dx = B.x;
  posB.dy = B.y;

  difAB.difVector(posB,posA);

  difX.dx = B.x - A.x;
  difY.dy = B.y - A.y;

  B.draw(context);

  //tijdelijke pijlen
  // posA.draw(0,0,"white",1);
  // posB.draw(0,0,"black",1);

  difAB.draw(A.x, A.y,"yellow",1)
  difX.draw(A.x, A.y,"green",1)
  difY.draw(A.x, A.y,"blue",1)

  A.draw(context);
}
