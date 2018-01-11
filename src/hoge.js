class Point2D{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  show(){
    console.log(this);
  }
}

let p1 = new Point2D(10,20);
let p2 = new Point2D(30,40);

p1.show();
p2.show();

