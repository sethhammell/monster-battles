export function boundedAdd(val, addVal, max) {
  var newVal = val + addVal;

  if (newVal > max) {
    newVal = max;
  }

  return newVal;
}

export function boundedSub(val, subVal, min = 0) {
  var newVal = val - subVal;

  if (newVal < min) {
    newVal = min;
  }

  return newVal;
}

export function boundedMult(val, multVal, max) {
  var newVal = val * multVal;

  if (newVal > max) {
    newVal = max;
  }

  return newVal;
}



export function boundedDiv(val, divVal, min) {
  if (divVal == 0) return val;

  var newVal = val / divVal;

  if (newVal < min) {
    newVal = min;
  }

  return newVal;
}
