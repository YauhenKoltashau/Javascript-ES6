// ES5
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  console.log(person.sayHello())
  // ES6

  const person1 = {
      name1: "John",
      sayWelcome() {
          return `It's a friend of mine! His name is ${this.name1}.`
      }
  }
  console.log(person1.sayWelcome());

  // exersize:
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);