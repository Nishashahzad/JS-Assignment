function diff_num(n) {
if (n <= 19) {
    return (19-n);
}
else {
    return ((n - 19)*3);
}
}
console.log(diff_num(11));
console.log(diff_num(19));