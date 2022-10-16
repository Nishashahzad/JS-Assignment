function numbers_order(x, y, z){
    if(y > x && z > y){
return "strict mode";
    }
    if(z > y){
return "soft mode";
    }
    else{
        return "undefined"
    }
}
console.log(numbers_order(12, 48, 56));
console.log(numbers_order(66, 45 ,66));
console.log(numbers_order(10, 12, 13));