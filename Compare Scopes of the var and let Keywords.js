var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);//global

let printNum;
for (let j = 0; j < 3; j++) {
  if (j === 2) {
    printNum = function() {
      return j;// local
    };
  }
}
console.log(printNum());

function checkScope() {
    var i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  checkScope()