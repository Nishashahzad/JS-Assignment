function three_numbers(x, y, z){
if( x == y && y == z){
    return 30;
}
if( x == y || y == z || x == z){
    return 40;
}
return 20;
}
console.log(three_numbers(9, 9, 9));
console.log(three_numbers(10, 10, 111));
console.log(three_numbers(10, 15, 44));