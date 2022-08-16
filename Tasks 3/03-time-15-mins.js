function time(array) {
  let hours = Number(array[0]);
  let minutes = Number(array[1]);

  minutes = minutes + 15;

  if (minutes > 59) {
    hours++;
    minutes = minutes - 60;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else if (hours > 23) {
    hours = 0;
    console.log(`${hours}:${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

time(["1", "46"]);
time(["0", "01"]);
time(["23", "59"]);
time(["11", "08"]);
time(["12", "49"]);
