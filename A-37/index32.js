function upper_lower(str){
    if(str.length < 3) {
        return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);
    return front_part + back_part;
}
console.log(upper_lower("Java"));
console.log(upper_lower("Ph"));
console.log(upper_lower("JavaScript"));
