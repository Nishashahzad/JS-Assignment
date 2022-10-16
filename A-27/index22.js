function start_spec_str(str){
if( str.length < 4){
return false;
}
front = str.substring(0, 4);
if(front == 'java'){
return true;
}
else {
    return false;
}
}
console.log(start_spec_str("javascript"));
console.log(start_spec_str("java"));
console.log(start_spec_str("media"));