const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

//declare namespace
  let spriteSheet,sw,sh,greenTank,background;

  let tileWidth = 84;
  let tileHeight = 84;
  let tileOnRow = 9

  spriteSheet = new Image();
  spriteSheet.src = "images/tanksheet.png";

  background = [
  31,31,31,31,31,31,31,31,31,
  31,0 ,0 ,0 ,0 ,0 ,0 ,0 ,31,
  31,0 ,24,25,0 ,0 ,26,0 ,31,
  31,0 ,0 ,0 ,0 ,0 ,0 ,0 ,31,
  31,0 ,0 ,0 ,0 ,27,0 ,0 ,31,
  31,0 ,0 ,0 ,0 ,29,0 ,0 ,31,
  31,0 ,26,0 ,0 ,0 ,0 ,0 ,31,
  31,0 ,0 ,0 ,0 ,0 ,0 ,0 ,31,
  31,31,31,31,31,31,31,31,31,
  ]

  greenTank = {};
  greenTank.animationArray = [1,2,3,4,5,6,7,8];
  greenTank.index = 0;
  greenTank.direction = 0;

  greenTank.x = 100;
  greenTank.y = 100;

  greenTank.vx = 0;
  greenTank.vy = -10;

  greenTank.draw = function(){
    greenTank.sx = greenTank.animationArray[greenTank.index]%8 * 84;
    greenTank.sy = Math.floor(greenTank.animationArray[greenTank.index]/8) * 84;
    context.save();
    context.translate(greenTank.y, greenTank.x);
    context.rotate(greenTank.direction)

    context.drawImage(spriteSheet,greenTank.sx,greenTank.sy,84,84,-42,-42,84,84);
    context.restore();

    context.beginPath();
    context.strokeStyle = "yellow";
    context.linewidth = "5";
    context.rect(greenTank.indexPosition % tileOnRow * tileWidth, Math.floor (greenTank.indexPosition/tileOnRow) * tileHeight,tileWidth,tileHeight);
    context.stroke();

  }

  greenTank.update = function(){
    greenTank.indexPosition = Math.floor(greenTank.x/ tileHeight) * tileOnRow + Math.floor(greenTank.y / tileWidth);

    greenTank.x += greenTank.vx;
    greenTank.y += greenTank.vy;

    if(greenTank.y <0){
      greenTank.y = height;
    }
    if(greenTank.x <0){
      greenTank.x = width;
    }
    if(greenTank.y >height){
      greenTank.y = 0;
    }
    if(greenTank.x >width){
      greenTank.x = 0;
    }
  }


  window.addEventListener('keydown',(e)=>{
    switch(e.key) {
      case "ArrowRight":
        greenTank.vx = 0;
        greenTank.vy = 10;
        greenTank.direction = 0.5 *Math.PI;
      break;
      case "ArrowDown":
        greenTank.vx = 10;
        greenTank.vy = 0;
        greenTank.direction = 1 *Math.PI;
      break;
      case "ArrowLeft":
        greenTank.vx = 0;
        greenTank.vy = -10;
        greenTank.direction = 1.5 * Math.PI;
      break;
      case "ArrowUp":
        greenTank.vx = -10;
        greenTank.vy = 0;
        greenTank.direction = 0 ;
      break;
    }
  })

  spriteSheet.addEventListener('load',()=>{
    sw = spriteSheet.width/8;
    sh = spriteSheet.height/4;
    setInterval(anime,100);
  });


  function anime(){
    context.clearRect(0,0,width,height);
    drawBackGround();
    greenTank.update();
    greenTank.draw();
    greenTank.index += 1;
    if(greenTank.index >= greenTank.animationArray.length){
      greenTank.index = 0
    }
    console.log(greenTank.indexPosition);
  }


  function drawBackGround(){
    //context.draw(spriteSheet,sx,sy,sw,sh,0,0,sw,sh);
    for(i=0;i<background.length;i++){
      let tileX = (i % tileOnRow) * tileWidth;
      let tileY = Math.floor(i / tileOnRow) * tileHeight;

      let sX = (background[i] % 8) * tileWidth;
      let sY =Math.floor(background[i]/8) * tileHeight;
      context.drawImage(spriteSheet,sX,sY,84,84,tileX,tileY,84,84);
    }
  }
