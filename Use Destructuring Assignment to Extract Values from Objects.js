const user = { name: 'John Doe', age: 34 };
// ES5
const name = user.name;
const age = user.age;
console.log(name);
console.log(age);
// ES6
const user1 = { name1: 'John Doe', age1: 34 };

const { name1, age1 } = user1
console.log(name1);
console.log(age1);


////
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES
console.log(`"HIGH_TEMPERATURES_IS_TODAY"${today}`)
console.log(`"HIGH_TEMPERATURES_IS_TOMORROW IS "${tomorrow}`);