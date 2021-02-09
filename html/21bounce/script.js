const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
let point,velocity;
//assign values
point = new Point(200,300,5,"red", false,"P");
velocity = new Vector2d(2,3);

anime();

//animation loop
function anime(){
  point.draw();
  point.vPos.draw(0,0,"yellow");

  point.vPos.sumVector(Point.vPos, velocity);
}
