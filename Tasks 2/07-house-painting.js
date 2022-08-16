function housePainting(HouseHeight, LenghtSideHouse, heightTriangleWall) {
  let walls = HouseHeight * LenghtSideHouse;
  let window = 1.5 * 1.5;
  let twoSidesAll = 2 * walls - 2 * window;
  let backWall = 6 * HouseHeight;
  let entry = 1.2 * 2;
  let commonBackAndFront = 2 * backWall - entry;

  let total = twoSidesAll + commonBackAndFront;
  let greenPaint = total / 3.4;

  let rectangle = 2 * (HouseHeight * LenghtSideHouse);
  let triangles = 2 * ((HouseHeight * heightTriangleWall) / 2);
  let totalRoof = rectangle + triangles;
  let redPaint = totalRoof / 4.3;

  console.log(greenPaint);
  console.log(redPaint);
}

housePainting(6, 10, 5.2);
housePainting(10.25, 5, 15.45, 8.88);
