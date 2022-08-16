function numbersDividedByNine(array) {
  let numberStart = Number(array[0]);
  let numberEnd = Number(array[1]);

  //   let number = 100;

  let sum = 0;

  for (let i = numberStart; i < numberEnd; i++) {
    if (i % 9 === 0) {
      console.log(i);
      sum = sum + i;
    }
  }
  console.log(`Sum is ${sum}`);
}
numbersDividedByNine(["100", "200"]);
