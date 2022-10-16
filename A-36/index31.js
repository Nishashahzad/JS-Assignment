function last_digits(x, y, z){
    if( x > 0 && y > 0 && z > 0){
return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    }
    else {
        return false;
    }

}
console.log(last_digits(20, 30, 60));
console.log(last_digits(-30, 20, 80));
console.log(last_digits(50, -40, 60));