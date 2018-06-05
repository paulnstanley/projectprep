//Exercise 1
var string = "hello";
var stringRev = string.split('').reverse().join('');
console.log(stringRev);

//Exercise 2
console.log(fullName);
var firstName = 'Jimmy';
var fullName = firstName + lastName;
var lastName = 'Hendrix';
//As written, it returns undefined.  Rearrange it:

var firstName = 'Jimmy';
var lastName = 'Hendrix';
var fullName = firstName + lastName;
console.log(fullName);

//Exercise 3
var fahrenheit = 98;
var kelvin = (fahrenheit + 459.67) * 5/9;

console.log("If you convert " + fahrenheit + " degrees fahrenheit to kelvin, it's " + Math.round(kelvin) + ".");

//Exercise 4
var puppyYears = 10.5;
var dogYears = 4;
var myAge = 33;

//I want it to be sure I'm at least two, so an if statement checks before doing the math:
if (myAge > 2) {
  var myDogAge = (puppyYears * 2) + (dogYears * (myAge - 2));
} else {
  var myDogAge = (puppyYears * myAge);
}

console.log("If I'm " + myAge + " in human years, then I'm " + myDogAge + " in dog years.");

//Exercise 5
for (var i = 1; i < 20; i++) {
  if (i % 3 == 0 && i % 5 == 0)
  console.log(i + " FizzBuzz");
  else if (i % 3 == 0)
  console.log(i + " Fizz");
  else if (i % 5 == 0)
  console.log(i + " Buzz");
  else
  console.log(i);
}
//I'm sure this could be more efficient but it works
