'use strict';

const pipe = (num, ...funcs) => {
  let result = num;
  for(let func of funcs) {
    result = func(result);
  }
  return result;
};

function addOne(x) {
  return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);