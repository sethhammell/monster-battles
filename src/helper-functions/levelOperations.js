export function levelToExp(level) {
  return Math.pow(level, 3);
}

export function expToLevel(exp) {
  return Math.floor(Math.pow(exp, 1/3));
}

export function expGain(level) {
  return level * 10;
}
