function schoolHall(width, height) {
  let widthInCm = width * 100;
  console.log(widthInCm);

  let heightInCm = height * 100;
  //   console.log(heightInCm);

  let widthWithoutKoridor = heightInCm - 100;
  //   console.log(widthWithoutKoridor);

  let bureauInLine = widthWithoutKoridor / 70;
  //   console.log(bureauInLine);

  let rows = heightInCm / 120;
  //   console.log(rows);

  let numberOfSeates = rows * bureauInLine - 3;
  //   console.log(numberOfSeates);

  //   console.log(numberOfSeates);
}

schoolHall(15, 8.9);
schoolHall(8.4, 5.2);
