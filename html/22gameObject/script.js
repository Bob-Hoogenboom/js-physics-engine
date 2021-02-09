const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
let GameObjects;

//assign values

//myGO = new GameObject(new Vector2d(200,300),new Vector2d(4,5), new Vector2d(0,0));

GameObjects = new Array(50);
for(let i=0; let i<GameObjects.length;i++){

}


anime();
//animation loop
function anime(){
  context.clearRect(0,0,width,height);
  requestAnimationFrame(anime);
  myGO.update();
  myGO.draw(context);
  myGO.vel.draw(myGO.pos.dx, myGO.pos.dy,"rgba(255,0,0,0.2)",10)
}
