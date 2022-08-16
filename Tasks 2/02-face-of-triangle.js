function faceOfTriangle(side, height) {
  let a = side;
  let h = height;

  let area = (a * h) / 2;
  let secondSign = area.toFixed(2);
  //  toFixed(2) - закръгля до два занка след десетичната запетая

  console.log(secondSign);
}

faceOfTriangle(20, 30);
faceOfTriangle(15, 35);
faceOfTriangle(7.75, 8.45);
