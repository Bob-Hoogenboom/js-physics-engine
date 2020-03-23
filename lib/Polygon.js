class Polygon{
  constructor(points){
    this.points = points;
    this.randomValue = randomValue;
    this.randomColor = getRandomColor();
  }

  draw(context){
    for(let i =0; i<randomValue; i++){
      this.points[i].draw(context);
      context.strokeStyle
      context.lineWidth = "3";

    }

    context.beginPath();
      context.moveTo(this.points[0].x,this.points[0].y);

      for(let i =0; i<randomValue; i++){
        context.lineTo(this.points[i].x,this.points[i].y);
        let randomColor = getRandomColor();
        context.strokeStyle = randomColor;
      }

      context.closePath();
      context.stroke();
  }
}
