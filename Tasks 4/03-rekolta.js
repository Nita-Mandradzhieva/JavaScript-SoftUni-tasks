function rekolta(kvMloze, grozdeZaEdinKvM, nujniLitriVino, BrRabotnici) {
  let allGrozde = kvMloze * grozdeZaEdinKvM;
  let vino = ((40 / 100) * allGrozde) / 2.5;
  let ostavat = 0;
  let perPerson = 0;

  if (vino > nujniLitriVino) {
    ostavat = vino - nujniLitriVino;
    perPerson = ostavat / BrRabotnici;
    console.log(
      `Good harvest this year! Total wine: ${vino} liters. ${ostavat} liters left -> ${perPerson} liters per person.`
    );
  } else if (vino < nujniLitriVino) {
    ostavat = nujniLitriVino - vino;
    console.log(
      `It will be a tough winter! More ${ostavat} liters wine needed.`
    );
  }
}

rekolta(650, 2, 175, 3);
rekolta(1020, 1.5, 425, 4);
