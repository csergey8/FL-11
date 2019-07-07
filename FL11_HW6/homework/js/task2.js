'use strict';

const a = parseFloat(prompt('Enter the length of the side A of the triangle'));
const b = parseFloat(prompt('Enter the length of the side B of the triangle'));
const c = parseFloat(prompt('Enter the length of the side C of the triangle'));
let result;

if (a >= 0 && b >= 0 && c >= 0) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b && a === c && b === c) {
      result = 'Eequivalent triangle';
    } else if (a !== b && a !== c && b !== c) {
      result = 'Normal triangle';
    } else {
      result = 'Isosceles triangle';
    }
  } else {
    result = 'Triangle doesn’t exist';
  }
} else {
  result = 'Length of side must be grater than 0';
}
console.log(result);