//jshint esversion: 6
var rect = {
  perimeter: (x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
};

function solveRect(l,b) {
  console.log("Solving for rectangle with l = " + l + " and b = " + b);

  if( l <= 0 || b <= 0){
    console.log("Dimensions should be positive");
  }
  else {
    console.log("Area of rectangle is " + rect.area(l,b));
    console.log("Perimeter of rectangle is " + rect.perimeter(l,b));
  }
}

solveRect(2,4);
solveRect(3,50);
solveRect(0,5);
solveRect(-3,5);
