const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
let A, B, positionVector, sumV, difV;

positionVector = new Vector2d(300,300)
A = new Point(100,100,10,"cyan",true,"A");
B = new Point(200,200,10,"pink", true,"B");
sumV = new Vector2d(0,0);
difV = new Vector2d(0,0);

anime();

function anime(){
  requestAnimationFrame(anime);
  sumV.vectorSum(A.position, B.position);
  difV.difVector(A.position, B.position);

  context.clearRect(0,0,width,height);
  A.draw(context,"cyan");
  B.draw(context, "pink");
  sumV.draw(0,0, "green");
  difV.draw(B.position.dx, B.position.dy, "black");

  A.position.draw(0,0);
  B.position.draw(0,0, "rgba(255, 255, 30, 0.5)");
}
