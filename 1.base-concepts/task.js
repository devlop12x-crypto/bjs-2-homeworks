"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  
  if (d < 0) {
    return [];
  }
  
  if (d === 0) {
    return [-b / (2 * a)];
  }
  
  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a)
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = parseFloat(percent);
  let c = parseFloat(contribution);
  let a = parseFloat(amount);
  let n = parseFloat(countMonths);

  if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(n)) {
    return false;
  }

  let s = a - c;
  let P = p / 100 / 12;
  let payment = s * (P + (P / ((Math.pow(1 + P, n)) - 1)));
  let totalAmount = payment * n;

  return Number(totalAmount.toFixed(2));
}
