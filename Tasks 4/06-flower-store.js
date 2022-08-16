function flowers(brMagnolii, brZumbuli, brRozii, brKaktusi, cenaNaPodaruka) {
  let sum = brMagnolii * 3.25 + brZumbuli * 4 + brRozii * 3.5 + brKaktusi * 8;
  //   console.log(sum);

  let danuci = (5 / 100) * sum;
  //   console.log(danuci);

  let pechalba = sum - danuci;
  //   console.log(pechalba);

  let needed = 0;

  if (pechalba < cenaNaPodaruka) {
    needed = cenaNaPodaruka - pechalba;
    console.log(`She will have to borrow ${needed.toFixed(0)} leva.`);
  } else {
    needed = pechalba - cenaNaPodaruka;
    console.log(`She is left with ${needed.toFixed(0)} leva.`);
  }
}

flowers(2, 3, 5, 1, 50);
flowers(15, 7, 5, 10, 100);
