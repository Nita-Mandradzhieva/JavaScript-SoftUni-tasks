function weatherForecast(array) {
  let degree = Number(array[0]);
  //   let weather = array[0];

  //   switch (weather) {
  //     case "sunny":
  //       console.log("It is warm outside!");
  //       break;

  //     case "cloudy":
  //       console.log("It is cold outside!");
  //       break;
  //     case "snowy":
  //       console.log("It is cold outside!");
  //       break;
  //   }

  if (degree >= 26.0 && degree <= 35.0) {
    console.log("Hot");
  } else if (degree >= 20.1 && degree <= 25.9) {
    console.log("Warm");
  } else if (degree >= 15.0 && degree <= 20.0) {
    console.log("Mild");
  } else if (degree >= 12.0 && degree <= 14.9) {
    console.log("Cool");
  } else if (degree >= 5.0 && degree <= 11.9) {
    console.log("Cold");
  } else console.log("unknown");
}

weatherForecast(["16.5"]);
weatherForecast(["8"]);
// weatherForecast(["snowy"]);
