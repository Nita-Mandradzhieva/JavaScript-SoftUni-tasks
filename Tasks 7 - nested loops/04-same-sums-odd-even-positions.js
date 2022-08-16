function oddAndEvenPositions(array) {
  let numberOne = Number(array[0]);
  let numberTwo = Number(array[1]);
  let printLine = "";

  for (let i = numberOne; i <= numberTwo; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currentNum.length; j++) {
      let currentDigit = Number(currentNum.charAt(j));
      if (j % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }

    if (oddSum === evenSum) {
      printLine += `${i}`;
    }
  }
  console.log(printLine);
}

oddAndEvenPositions(["100000", "100050"]);
oddAndEvenPositions(["123456", "124000"]);
