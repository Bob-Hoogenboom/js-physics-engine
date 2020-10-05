const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let dice, sw, sh, roll, score, scorelist;


dice = {};
dice.image = new Image();
dice.image.src = "images/d20SpriteSheetStill.png";

scorelist = [];
for(let i = 1; i<=20;i++){
  scorelist.push(0);
}

dice.image.addEventListener('load',()=>{
  sw = dice.image.width/5
  sh = dice.image.height/4;
  roll = Math.floor(Math.random()*20)+1;

  setInterval (anime,500);
})


function anime(){
  context.drawImage(dice.image,(roll-1)sw,0,sh,sw,sh,200,200,sw,sh);
  console.log(roll)
  scorelist[score + 2] ++;
}

// let dice,sw,sh,roll,roll_2,score;
//
// dice = {};
//
// dice.image = new Image();
// dice.image.src = "images/dice.png";
//
// dice.image.addEventListener('load',()=>{
//     sw = dice.image.width/6;
//     sh = dice.image.height;
//     roll = Math.floor(Math.random()6)+1;
//     roll_2 = Math.floor(Math.random()6)+1;
//     score = roll + roll_2;
//
//     animate();
// })
//
// function animate(){
//     context.drawImage(dice.image,(roll-1)sw,0,sw,sh,200,200,sw,sh)
//     context.drawImage(dice.image,(roll_2-1)sw,0,sw,sh,400,200,sw,sh);
//     console.log(score)
// }
