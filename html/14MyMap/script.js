const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let img_highress, img_lowress, scale, point, coord;

img_lowress = new Image();
img_lowress.src = "images/Skyrim.jpg";

img_highress = new Image();
img_highress.src = "images/Skyrim2.jpg";

scale = img_highress.width / img_lowress.width;
coord = {};

point = new Point(400,50,50,"white",true);


setInterval(anime, 10);

function anime(){

  coord.x = point.x - point.radius;
  coord.y = point.y - point.radius;

  context.clearRect(0,0,width,height);
  //context.drawImage(img,sx,sy,sw,sh,x,y,w,h);
  // context.drawImage(img_highress, 400, 400, 200, 200, 500, 300, 200, 200);
  context.drawImage(img_lowress, 0, -0);

  context.fillRect(coord.x-5, coord.y-5, 2*point.radius+10, 2*point.radius+10);
  context.drawImage(img_highress, coord.x, coord.y, 75, 75, coord.x, coord.y, 2*point.radius, 2*point.radius);
  // point.draw(context);

}
