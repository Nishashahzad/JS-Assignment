function max_twonum_range(x, y) {
    if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
        if (x === y) {
            return "Numbers are the same";
        }
        else if (x > y) {
            return x;
        }
        else {
            return y;
        }
    } else {
        return "Numbers don't fit in range"
    }
}
console.log(max_twonum_range(46, 57));
console.log(max_twonum_range(50, 40));
console.log(max_twonum_range(1, 1));
