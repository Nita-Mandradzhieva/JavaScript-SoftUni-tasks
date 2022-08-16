function multipleTable() {
  let product = 0;
  for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
      product = x * y;
      console.log(`${x} * ${y} = ${product}`);
    }
  }
}

multipleTable();
