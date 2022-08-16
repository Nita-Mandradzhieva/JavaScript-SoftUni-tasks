function swimming(array) {
  let recordInSEconds = Number(array[0]);
  let distanceInMeters = Number(array[1]);
  let timeInSecondsFor1meter = Number(array[2]);
  let needed = 0;

  let needToSwim = distanceInMeters * timeInSecondsFor1meter;
  console.log(needToSwim);

  let add12 = distanceInMeters / 15;
  console.log(add12);

  let add12Secs = add12 * 12.5;
  console.log(add12Secs);

  let totalTime = needToSwim + add12Secs;
  console.log(totalTime);

  if (totalTime > recordInSEconds) {
    needed = totalTime - recordInSEconds;
    console.log(`No, he failed! He was ${needed.toFixed(2)} seconds slower`);
  } else if (totalTime < recordInSEconds) {
    // needed = recordInSEconds - totalTime;
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds`
    );
  }
}

swimming(["10464", "1500", "20"]);
swimming(["55555.67", "3017", "5.03"]);
