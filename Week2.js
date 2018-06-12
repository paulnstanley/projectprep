//Multiply
function multiply(a, b){
  return a * b;
}

console.log(multiply(1,2));

//Return Negative
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num - (num * 2);
  }
}

console.log(makeNegative(10));

//isGreaterThan
function isGreaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
   } else {
     return false;
   }
}

console.log(isGreaterThan(5,10));

//Is Even:
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Is Old Enough to Drink
function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

//Check Age
function checkAge(name, age) {
  if (age >= 21) {
    return ("Welcome, " + name + "!");
  } else {
    return ("Go home, " + name + "!");
  }
}

//Get Length of Word
function getLengthOfWord(word) {
  return word.length;
}

console.log(word.length);

//Get Length of two words
function getLengthOfTwoWords(word1, word2) {
  return (word1.length + word2.length);
}
console.log(word.length);

//Remove first and last character
function removeChar(str){
  if (str.length > 2) {
    console.log(str.slice(1, (str.length - 1)));
  } else {
    console.log("Greater than two characters, please.");
  }
}

removeChar("eloquent");
