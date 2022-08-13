const { mutateExecOptions } = require("nodemon/lib/config/load");

function mean(arr) {
  let sum = 0;
  for (let number of arr) {
    let int = parseInt(number);
    sum += int;
  }
  let average = (sum / arr.length).toFixed(2);
  return average;
}

function median(arr) {
  let index = parseInt(arr.length / 2);
  return arr[index];
}

function mode(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  let maxNum = Math.max(...Object.values(obj));
  let key = null;
  for (let keys in obj) {
    if (obj[keys] === maxNum) {
      key = keys;
    }
  }
  return key;
}

module.exports = { mean, median, mode };
