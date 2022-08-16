function LunchBreak(array) {
  let nameOfSerial = array[0];
  let timeOfEpizod = Number(array[1]);
  let timeBreak = Number(array[2]);

  let lunchTime = (timeBreak * 1) / 8;
  let timeOtdih = (timeBreak * 1) / 4;
  let leftTime = timeBreak - lunchTime - timeOtdih;

  if (leftTime >= timeOfEpizod) {
    console.log(
      "You have enough time to watch Game of Thrones and left with 0 minutes free time."
    );
  } else {
    console.log(
      "You don't have enough time to watch Teen Wolf, you need 11 more minutes."
    );
  }
}

LunchBreak(["Game of Thrones", "60", "96"]);
LunchBreak(["Teen Wolf", "48", "60"]);
