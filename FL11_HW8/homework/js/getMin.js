'use strict';

const getMin = (...args) => {
  let min = args[0];
  for(let el of args){
    min = el < min ? el : min;
  }
  return min
}

getMin(343, 233, 13.4, -11.55, -5, 0);