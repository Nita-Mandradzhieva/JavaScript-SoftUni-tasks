function sumOfDigits(array) {
  let number = Number(array[0]);

  let sum = 0;
  let digit = 0;
  let result = 0;

  for (let i = 0; i < number; i++) {
    number = number % 10;
    sum += number;
    console.log(number);
    console.log(sum);
  }
}

sumOfDigits(["1234"]);
sumOfDigits(["564891"]);

// let a = 1234;
// let b = a % 10;
// console.log(b);
