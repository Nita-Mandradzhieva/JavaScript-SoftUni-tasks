function multiple(array) {
  let number = Number(array[0]);
  let result = 0;

  for (let i = 1; i <= 10; i++) {
    result = number * i;
    console.log(`${i} * ${number} = ${result}`);
  }
}

multiple(["5"]);
