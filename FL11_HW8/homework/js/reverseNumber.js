'use strict';

const reverseNumber = num => {
  let result = 0;
  while (num !== 0) {
    result *= 10;
    result = result + num % 10;
    num = num - num % 10;
    num /= 10;
  }
  return result;
}

reverseNumber(-12563504987);