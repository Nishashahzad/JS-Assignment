function valCheck(a, b) {
    if(!((a % 7 == 0 || a % 11 == 0 ) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0 ) || (b % 7 == 0 || b % 11 == 0));
    }
    else{
        return false;
    }

}
console.log(valCheck(14, 121));
console.log(valCheck(14,12));
console.log(valCheck(22, 23));