function genderAndAge(array) {
  let age = Number(array[0]);
  let gender = array[1];

  if (gender === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else if (age < 16) {
      console.log("Master");
    }
  } else if (gender === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else if (age < 16) {
      console.log("Miss");
    }
  }
}

genderAndAge(["12", "f"]);
genderAndAge(["17", "m"]);
genderAndAge(["25", "f"]);
genderAndAge(["13.5", "m"]);
