const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');
if(num === gnum){
console.log("Matched!")
}
else {
    console.log("Not Matched!, The number was " + gnum);
}
