function sumSeconds(array) {
  let secondsOfTheFirst = Number(array[0]);
  let secondsOfTheSecond = Number(array[1]);
  let secondsOfTheThird = Number(array[2]);

  let sumAll = secondsOfTheFirst + secondsOfTheSecond + secondsOfTheThird;

  let minutes = Math.floor(sumAll / 60);
  let seconds = sumAll % 60;

  if (seconds < 10) {
    console.log("${minutes}:0${seconds}");
  } else {
    console.log("${minutes}:${seconds}");
  }
}

sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "44"]);
