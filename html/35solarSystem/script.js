const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
// begin hier met jouw code voor deze opdracht
let moon, earth, sun, earthAngle;

sun = new Point(width/2, height/2, 10, "yellow", false, "Sun");
earth = new Point(100, 100, 5, "green", false, "Earth");
earthVector = new Vector2d(0,0);
earthAngle = 0;
moon = new Point(200, 200, 7, "grey", false, "Moon");

anime();


function anime(){
  requestAnimationFrame(anime,1);
  context.fillStyle = "rgba(0,0,0,0.6)";
  context.fillRect(0,0,width, height);
  sun.draw(context);
  
  //earthVector.dx = 100;
  //earthVector.dy = 100;
  earthVector.magnitude = 50;
  earthVector.angle = earthAngle;
  earthVector.vectorSum(earthVector, sun.vPos);
  earth.vPos = earthVector;
  earth.draw(context);
  earthAngle += 0.05;
  
  moon.draw(context);
}
