function cat(numberOfPochivniDni) {
  let pochivniDni = numberOfPochivniDni * 127;
  let rabotniDni = 365 - numberOfPochivniDni;
  let rabotniDni2 = rabotniDni * 63;
  let razlikaInMins = 0;
  let razlikaInHours = 0;

  let minsIgra = rabotniDni2 + pochivniDni;

  if (minsIgra < 30000) {
    razlikaInMins = 30000 - minsIgra;
    razlikaInHours = razlikaInMins / 60;
    console.log(
      `Tom sleeps well ${razlikaInHours.toFixed(0)} hours less for play`
    );
  } else if (minsIgra > 30000) {
    razlikaInMins = minsIgra - 30000;
    razlikaInHours = razlikaInMins / 60;
    console.log(
      `Tom will run away ${razlikaInHours.toFixed(0)} hours more for play`
    );
  }
}

cat(20);
cat(113);
