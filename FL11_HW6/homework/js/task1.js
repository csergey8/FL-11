'use strict';

const a1 = parseFloat(prompt('enter the coordinate value along the x-axis of point a(a1):'));
const a2 = parseFloat(prompt('enter the coordinate value along the y-axis of point a(a2):'));
const b1 = parseFloat(prompt('enter the coordinate value along the x-axis of point b(b1):'));
const b2 = parseFloat(prompt('enter the coordinate value along the y-axis of point b(b2):'));
const c1 = parseFloat(prompt('enter the coordinate value along the x-axis of point c(c1):'));
const c2 = parseFloat(prompt('enter the coordinate value along the y-axis of point c(c2):'));
const divider = 2;
const midpointX = (a1 + b1) / divider;
const midpointY = (a2 + b2) / divider;
let result;

if(midpointX === c1 && midpointY === c2){
  result = true;
} else {
  result = false;
}

console.log(result);
