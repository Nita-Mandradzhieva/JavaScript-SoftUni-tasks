function literature(array) {
  let numberOfPages = Number(array[0]);
  let pageForHour = Number(array[1]);
  let days = Number(array[2]);

  let AllTimeToRead = numberOfPages / pageForHour;
  let neededHoursPerDay = AllTimeToRead / days;
  console.log(neededHoursPerDay);
}

literature(["212", "20", "2"]);
literature(["432", "15", "4"]);
