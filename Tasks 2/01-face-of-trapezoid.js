function faceTrapezoid(basis1, basis2, height) {
  let b1 = basis1;
  let b2 = basis2;
  let h = height;

  let formulaForTrapezoidFace = ((b1 + b2) * h) / 2;
  console.log(formulaForTrapezoidFace);
}

faceTrapezoid(8, 13, 7);
