function perimeterAndFaceOfCircle(r) {
  let formulaPerimeter = (2 * 3.14 * r).toFixed(2);
  let formulaFace = (3.14 * r * r).toFixed(2);

  console.log(formulaFace);
  console.log(formulaPerimeter);
}

perimeterAndFaceOfCircle(3);
perimeterAndFaceOfCircle(4.5);
