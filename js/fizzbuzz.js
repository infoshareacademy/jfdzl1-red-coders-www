var firstNumber = 1;
var lastNumber = 100;

for (var currentNumber = firstNumber; currentNumber <= lastNumber; currentNumber++)
{
  var mod3 = (currentNumber % 3) === 0;
  var mod5 = (currentNumber % 5) === 0;

  if (mod3 && mod5)
  {
    console.log("FizzBuzz");
  } else if (mod3)
  {
    console.log("Fizz");
  } else if (mod5)
  {
    console.log("Buzz");
  } else {
    console.log(currentNumber);
  }
}