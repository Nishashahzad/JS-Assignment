function test_digits(x,y,n){
    if( n < 40 || n > 1000 ){
return false;
    }
    else if
    ( n >= x || n <= y ){
return true;
    }
    else{
        return false;
    }
}

console.log(test_digits(45, 46,1000));
console.log(test_digits(13, 24, 5));