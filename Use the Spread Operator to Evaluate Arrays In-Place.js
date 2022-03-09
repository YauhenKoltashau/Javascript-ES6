var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
console.log(maximus);

const arr2 = [6, 89, 3, 45];
const maxim = Math.max(...arr2);
console.log(maxim);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr3;

arr3 = [...arr1];  // Change this line

console.log(arr3);
