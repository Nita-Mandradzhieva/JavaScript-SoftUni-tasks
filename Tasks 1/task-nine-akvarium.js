function akvarium(array) {
  let lenght = Number(array[0]);
  let width = Number(array[1]);
  let height = Number(array[2]);
  let percentage = Number(array[3]);

  // DESTRUCTURING - Basic array
  //   let [lenght, width, height, percentage] = array.map(function (
  //     elementOfArray
  //   ) {
  //     return Number(elementOfArray);
  //   });

  //   let [lenght, width, height, percentage] = array.map((elementOfArray) =>
  //     Number(elementOfArray)
  //   );

  let volumeAkvarium = lenght * width * height;
  let litters = volumeAkvarium / 1000;
  let takenPlace = percentage / 100;

  let neededLitters = litters * (1 - takenPlace);

  //   console.log(neededLitters);
  return neededLitters;
}

let result = akvarium(["85", "75", "47", "17"]);
console.log(result);

// akvarium(["85", "75", "47", "17"]);
// akvarium(["105", "77", "89", "18.5"]);
