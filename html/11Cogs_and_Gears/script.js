const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let img;

img = new Image();
img.src ="images/cog.png";

angle = 0.1;

img.addEventListener('load',()=>{
 setInterval(anime,10)
})

function anime(){
  context.clearRect(0,0,width,height);
  context.save();
  context.translate(200,300);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(425,150);
  context.rotate(41.5);
  context.rotate(-angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(580,370);
  context.rotate(45.5);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(750,580);
  context.rotate(44.5);
  context.rotate(-angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(900,355);
  context.rotate(47);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(1150,247);
  context.rotate(9);
  context.rotate(-angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(1201,513);
  context.rotate(4.5);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();

  context.save();
  context.translate(149,565);
  context.rotate(8.5);
  context.rotate(-angle);
  context.drawImage(img,-150,-150,300,300)
  context.restore();


  angle += 0.01;
}
