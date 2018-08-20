function sayHello(greeting, name = "World") {
  return `${greeting}, ${name}!`
}

console.log('sayHello message:', sayHello("Good morning", "Fiona"))

// anonymous function
var add = function(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}

console.log('1 + 3 with add function:', add(1, 3));

//------------------------------------------------------

// ### Task:
//
// 1. Declare a **named** function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

// function total(numbers){
//   var total = 0;
//   for (number of numbers){
//     total += number;
//   }
//   return total
// }
//
// console.log(total([1,2,3, 4]));

// 2. Define an **anonymous** function expression that takes two arguments:
//   - an object, for example, `{ name: 'Wojtek', age: 30 }`
//   - a string, for exmaple, `'name'`
//
//   Your function should return `true` if the given string is a `key` on the given object and `false` if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

var isKey = function(object, string){
  for (var key in object){
    if (key == string){
      return true
    }
  }
  return false
}

var testObject = {
  name: 'Wojtek',
  age: 30,
  address: "Somewhere"
 }

console.log(isKey(testObject, "address"));

// keys = Object.keys(object) - gives array of all the keys
// if keys.includes(string) etc...
//
//or return object.hasOwnProperty(string)

//------------------------------------------------------

var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log(multiply(3, 5));
