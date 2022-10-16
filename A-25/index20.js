function test12(x){
if (x % 3 == 0 || x % 7 == 0) {
return true;
}
else {
    return false;
}
}
console.log(test12(9));
console.log(test12(14));
console.log(test12(5));