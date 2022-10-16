function lessthan20(x, y, z){
  return (x >= 20 && (x < y || x < z)) ||
  (y >= 20 && (y < x || y < z))        ||
  (z >= 20 && (z < y || z < x));
}
console.log(lessthan20(20, 30, 50));
console.log(lessthan20(10, 9, 8));