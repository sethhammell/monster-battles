export function threeBarGradient(fullBar, halfBar, emptyBar, currentValue, maxValue) {
  var red = 0;
  var green = 0;
  var blue = 0;

  if (currentValue / maxValue >= 0.5) {
    let ratio = (currentValue - (maxValue / 2)) / (maxValue / 2);
    let invertedRatio = 1 - ratio;
    red = fullBar[0] * ratio + halfBar[0] * invertedRatio;
    green = fullBar[1] * ratio + halfBar[1] * invertedRatio;
    blue = fullBar[2] * ratio + halfBar[2] * invertedRatio;
  }
  else {
    let ratio = currentValue / (maxValue / 2);
    let invertedRatio = 1 - ratio;
    red = halfBar[0] * ratio + emptyBar[0] * invertedRatio;
    green = halfBar[1] * ratio + emptyBar[1] * invertedRatio;
    blue = halfBar[2] * ratio + emptyBar[2] * invertedRatio;
  }

  return { red: red, green: green, blue: blue };
}
