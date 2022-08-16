function convertor(array) {
  let usd = Number(array[0]);
  let result = usd * 1.79549;
  return result;
}

console.log(convertor(["22"]));
convertor(["100"]);
convertor(["12.5"]);
