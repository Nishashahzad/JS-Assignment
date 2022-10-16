function check_three_nums(x, y, z) 
{
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(check_three_nums(1, 40, 9));
console.log(check_three_nums(50, 90, 98));