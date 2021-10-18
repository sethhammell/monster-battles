export function boundedAdd(val, addVal, max) {
  var newVal = val + addVal

  if (newVal > max) {
    newVal = max
  }

  return newVal
}

export function boundedSub(val, subVal, min = 0) {
  var newVal = val - subVal

  if (newVal < min) {
    newVal = min
  }

  return newVal
}
