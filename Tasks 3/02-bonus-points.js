function bonusPoints(array) {
  let points = Number(array[0]);
  let bonusPoints = 0.0;

  if (points <= 100) {
    bonusPoints = 5;
    // console.log(bonusPoints);
  }
  if (points > 100) {
    bonusPoints = points * (20 / 100);
    // console.log(bonusPoints);
  }
  if (points > 1000) {
    bonusPoints = points * (10 / 100);
    // console.log(bonusPoints);
  }
  if (points % 2 == 0) {
    bonusPoints = bonusPoints + 1;
    // console.log(bonusPoints);
  }
  if (points % 10 == 5) {
    bonusPoints = bonusPoints + 2;
    // console.log(bonusPoints);
  }

  let allPoints = bonusPoints + points;
  //   console.log(allPoints);

  console.log(bonusPoints);
  console.log(allPoints);
}

bonusPoints(["20"]);
bonusPoints(["175"]);
bonusPoints(["2703"]);
bonusPoints(["15875"]);
