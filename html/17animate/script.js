const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
let backGround;
let bitBoy,sw,sh,sx,sy,x,y,w,h,index;
let yspeed;

backGround = new Image()
backGround.src = "images/Grazz.png";

bitBoy = new Image()
bitBoy.src = "images/8BitForward.png";
index = 0;
yspeed = 20;

bitBoy.addEventListener('load',()=>{
  sw = bitBoy.width/4;
  sh = bitBoy.height/1;
  x = width/2;
  y = 100;

  setInterval(anime,100);
})

function anime(){
  sx = index%4 * sw;
  sy = 0; //Math.floor(index%2) * sh;

  w = sw;
  h = sh;


  context.clearRect(0,0,width,height);

  context.drawImage(backGround,0,0,width,height);
  console.log(index,x);
  context.drawImage(bitBoy,sx,sy,sw,sh,x,y,w,h);
  //context.drawImage(bitBoy,0,0);
  index++;
  if(index>3){
  index = 0;
  }

  y += yspeed;
  if(y>height){
    y = -sh;
  }
}
