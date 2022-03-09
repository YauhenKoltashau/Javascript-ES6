const [a, b,,,,,,, c] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
[a,b,,,,c] = [3, 8, 7 , 9, 8, 9];
console.log(a, b, c);


let a = 8, b = 6;
[a, b] = [b, a]
console.log(a, b)