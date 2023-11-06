"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b**2 - 4 * a * c;
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d) )/(2*a);
    const x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b/(2*a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const loanBody = amount - contribution;
  const p =(percent / 100) / 12;
  const pay = countMonths * loanBody * (p + p / ((1 + p)**countMonths - 1));
  return +pay.toFixed(2);
}