
export function roundNumber(value: number, precision = 4) {

  const multi = Math.pow(10, precision);

  return Math.round(value * multi) / multi;
}