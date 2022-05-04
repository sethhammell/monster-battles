export function getRandomValue(min, max, neg = false) {
  var sign = neg ? -1 : 1;
  return sign * Math.round(Math.random() * (max - min) + min);
}