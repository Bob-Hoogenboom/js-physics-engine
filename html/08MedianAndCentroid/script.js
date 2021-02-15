const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let A,B,C,S;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC,lBMCA,lCMAB;



A = new Point(200,100,10,"red",true,"A");
B = new Point(301,300,10,"blue",true,"B");
C = new Point(400,100,10,"yellow",true,"C");
S = new Point(500,100,5,"grey",false);

MAB = new Point(50,50,5,"white",false);
MBC = new Point(60,50,5,"white",false);
MCA = new Point(70,50,5,"white",false);

lAB = new LinearFunction(0,0);
lBC = new LinearFunction(0,0);
lCA = new LinearFunction(0,0);

lAMBC = new LinearFunction(0,0);
lBMCA = new LinearFunction(0,0);
lCMAB = new LinearFunction(0,0);

function anime(){
  context.clearRect(0,0,width,height);

//lAB.slope, lAB.intercept & lAB.draw defenition
  lAB.slope = (B.y - A.y)/(B.x - A.x);
  lAB.intercept = (B.y - B.x * lAB.slope);

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = (A.y - A.x * lAMBC.slope);

  lAB.draw(context,"purple");
  lAMBC.draw(context,"magenta");



//lBC.slope, lBC.intercept & lBC.draw defenition
  lBC.slope = (C.y - B.y)/(C.x - B.x);
  lBC.intercept = (C.y - C.x * lBC.slope);

  lBMCA.slope = (B.y - MCA.y)/(B.x - MCA.x);
  lBMCA.intercept = (B.y - B.x * lBMCA.slope);

  lBC.draw(context,"green");
  lBMCA.draw(context,"");



//lCA.slope, lCA.intercept & lCA.draw defenition
  lCA.slope = (A.y - C.y)/(A.x - C.x);
  lCA.intercept = (A.y - A.x * lCA.slope);

  lCMAB.slope = (C.y - MAB.y)/(C.x - MAB.x);
  lCMAB.intercept = (C.y - C.x * lCMAB.slope);

  lCA.draw(context,"orange");
  lCMAB.draw(context,"");



  A.draw(context);
  B.draw(context);
  C.draw(context);


  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MAB.draw(context);

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw(context);

  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;
  MCA.draw(context);

  S.x = (C.x + A.x + B.x)/3;
  S.y = (C.y + A.y + B.y)/3;
  S.draw(context);

}

setInterval(anime,10)
