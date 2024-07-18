"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a),
        x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  } else if (d === 0) {
    arr = [-b/(2*a)];
  } else {
    arr = [];
  }

  return arr;
}
// solveEquation(-2, 4, -2);
// solveEquation(1, -2 ,-2);
// solveEquation(6, 4, 2);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let monthlyPayment = s * (p + (p / (((1 + p)**countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return +totalAmount.toFixed(2);
}
// calculateTotalMortgage(10, 0, 50000, 12);
// calculateTotalMortgage(10, 1000, 50000, 12);
// calculateTotalMortgage(10, 0, 20000, 24);
// calculateTotalMortgage(10, 1000, 20000, 24);
// calculateTotalMortgage(10, 20000, 20000, 24);