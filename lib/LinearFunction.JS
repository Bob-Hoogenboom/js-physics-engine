class LinearFunction {
  constructor(slope,intercept) {
    this.slope = slope;
    this.intercept = intercept;
  }

  y(x) {
    return x*this.slope + this.intercept;
  }

  intersection(line){ //intersection rekent het snijpunt uit
    //line.slope line.intercept
    let ans = {};
    ans.x = (line.intercept - this.intercept)/(this.slope - line.slope);
    ans.y = this.y(ans.x);
    return ans;
  }

draw(context,color){
  this.strokeStyle = color || "color";
  context.moveTo(0,this.y(0));
  context.lineTo(canvas.width,this.y(canvas.width));
  context.stroke();
}

}
