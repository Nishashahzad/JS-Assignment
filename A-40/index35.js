function check8(x, y){
    if(x == 8 || y == 8){
return true;
    }
    if( (x + y == 8) || (Math.abs(x-y==8))){
       return true; 
    }
    else {
        return false
    }
}
console.log(check8(7, 8));
console.log(check8(126,10));