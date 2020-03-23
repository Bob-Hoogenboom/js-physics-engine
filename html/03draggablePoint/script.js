const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let myPoint = new Point(200,300,30,"red",true);


function animate(){
  context.clearRect(0,0,width,height)
  myPoint.draw(context)
}


setInterval(animate,10);
