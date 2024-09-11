

// based on user input recursive function to calculate the result of raising a number to a given power

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
console.log(power(10,10)); // output 



