// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));

  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }

  console.log(sum(1,2,3,4,5,6,2,5)) 