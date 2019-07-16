'use strict'

const getNumbers = str => {
  let numbersArray = [];
  for(let char of str) {
    if(!isNaN(char)){
      numbersArray.push(parseFloat(char));
    }
  }
  return numbersArray
}

const findTypes = (...args) => {
  let types = {};
  for(let el of args) {
    if(!types[typeof el]) {
      types[typeof el] = 1;
    } else {
      types[typeof el]++;
    }
  }
  return types;
}

const executeforEach = (arr, func) => {
  for(let el of arr) {
    func(el);
  }
}

const mapArray = (arr, func) => {
  let newArray = [];
  executeforEach(arr, el => {
    newArray.push(func(el));
  })
  return newArray;
}

const filterArray = (arr, func) => {
  let newArray = [];
  executeforEach(arr, el => {
    func(el) ? newArray.push(el) : null
  })
  return newArray
}

const showFormattedDate = date => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const d = new Date(date);
  return `Date: ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`
}

const canConvertToDate = date => !isNaN(new Date(date).getTime());

const daysBetween = (firstDate, secondDate) => {
  const hours = 24;
  const secAndMin = 60;
  const milliSec = 1000;
  const diff = secondDate.getTime() - firstDate.getTime();
  return Math.round(diff / (milliSec * secAndMin * secAndMin * hours));
}

const getAmountOfAdultPeople = arr => {
  const days = 365;
  const years = 18;
  const filteredArray = filterArray(arr, el => {
    let yearsOld = daysBetween(new Date(el[' birthday ']), new Date()) / days;
    return yearsOld > years
  })
  return filteredArray.length
}

const keys = obj => {
  let arr = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr
}

const values = obj => {
  let arr = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr
}

