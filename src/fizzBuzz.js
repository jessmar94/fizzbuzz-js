function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
      return "Fizz";
  } else if (this._isDivisibleBy(5, number)) {
    return "Buzz";
  } else {
     return number ;
  }
}

// Alternative way to do calculation. Could do 15 as multiple for fizzbuzz rather than 5 and 3.
FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}

// Print the numbers 1-100 in the console.
var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
