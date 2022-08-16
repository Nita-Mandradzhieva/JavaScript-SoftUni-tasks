function numberPiramid(array) {
  let number = Number(array[0]);
  let current = 1;
  let isBigger = false;
  let printCurrent = "";
  for (let rows = 0; rows <= number; rows++) {
    for (let cols = 0; cols <= rows; cols++) {
      if (current > number) {
        isBigger = true;
        break;
      }
      printCurrent += current + " ";
      current++;
    }
    console.log(printCurrent);
    printCurrent = "";
    if (isBigger) {
      break;
    }
  }
}

numberPiramid(["7"]);
numberPiramid(["12"]);
numberPiramid(["15"]);
