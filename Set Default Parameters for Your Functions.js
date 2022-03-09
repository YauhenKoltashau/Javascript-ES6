const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
  

const increment = (number, value = 1) => number + value;
console.log(increment(5, 6));
console.log(increment(5));

