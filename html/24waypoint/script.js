const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let A,B,point,dif,distance,moveToB;
//declare namespace
A = new GameObject(new Vector2d(100,100),new Vector2d(0,0),new Vector2d(0,0),15,"cyan");
B = new GameObject(new Vector2d(300,400),new Vector2d(0,0),new Vector2d(0,0),15,"lime");
point = new GameObject(new Vector2d(200,200),new Vector2d(5,2),new Vector2d(0,0),10,"red");
//point.vel.magnitude = 5;
dif = new Vector2d(0,0)
moveToB = true;


//assign values
anime();
//animation loop
function anime(){
  context.clearRect(0,0,width, height);
  requestAnimationFrame(anime,1);

  A.draw(context);
  B.draw(context);



if(moveToB == true){
  dif.difVector(B.pos,point.pos);
}

else if(moveToB == false){
  dif.difVector(A.pos,point.pos);
}

distance = dif.magnitude;
if(distance < 1 && moveToB == true){
  moveToB = false;
  console.log(moveToB);
}
else if(distance < 1 && moveToB == false ){
  moveToB = true;
  console.log(moveToB);
}

  console.log(distance);


  B.pos.draw(0,0,"white",0);
  point.pos.draw(0,0,"white",0);

  point.draw(context);
  point.vel.draw(point.pos.dx, point.pos.dy,"pink", 5);
  dif.draw(point.pos.dx, point.pos.dy, "yellow",0)
  //console.log(point.vel.magnitude);
  point.vel.vectorSum(point.vel,dif);
  point.vel.magnitude =0.9;
  point.update();
}
