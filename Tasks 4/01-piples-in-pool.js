function inPool(
  volumeInLitters,
  debitFirstPiplePerHour,
  debitSecondPiplePerHour,
  hoursNoWorker
) {
  let firstPipleNapulnila = debitFirstPiplePerHour * hoursNoWorker;
  console.log(firstPipleNapulnila);

  let secondPipleNapulnila = debitSecondPiplePerHour * hoursNoWorker;
  console.log(secondPipleNapulnila);

  let all = firstPipleNapulnila + secondPipleNapulnila;

  //660 * 100 / 1000
  let percentage = 0;
  let percentageForPipline1 = 0;
  let percentageForPipline2 = 0;
  let prelqti = 0;

  if (all < volumeInLitters) {
    percentageForPool = (all * 100) / 1000;
    percentageForPipline1 = (firstPipleNapulnila * 100) / all;
    percentageForPipline2 = (secondPipleNapulnila * 100) / all;
    console.log(
      `The pool is ${percentageForPool.toFixed(
        2
      )} full. Pipe 1: ${percentageForPipline1.toFixed(
        2
      )}. Pipe 2: ${percentageForPipline2.toFixed(2)}.`
    );
  } else if (all > volumeInLitters) {
    prelqti = all - volumeInLitters;
    console.log(
      `For ${hoursNoWorker.toFixed(
        2
      )} hours the pool overflows with ${prelqti} liters.`
    );
  }
}

inPool(1000, 100, 120, 3);
// inPool(100, 100, 100, 2.5);
