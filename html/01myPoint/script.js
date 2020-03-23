const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht


let myCircle = new Point(getRandomInt(0,width),getRandomInt(0,height),getRandomInt(1,100),getRandomColor());


function randomCircleMaker(){
  myCircle.draw(context);
  myCircle.Update(getRandomInt(0,width),getRandomInt(0,height),getRandomInt(1,100),getRandomColor());
}

setInterval(randomCircleMaker,100);
