function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

 let firstElement1= a[0]
 let lastElement1= a[a.length - 1]

 let firstElement2= b[0]
 let lastElement2= b[b.length - 1]

 if (firstElement1===firstElement2 || lastElement1===lastElement2 || a !== undefined && b !== undefined && a.length < 1 && b.length < 1){
   return true;
 } else {
   return false;
 }
}

 function endsMeet(values, n) {
   if (!values || values.length < 1 || n < 0 || n > values.length) {
     return [];
   }

   return values.slice(0, n).concat(values.slice(values.length - n));
 }

function difference(numbers) {
  if (numbers == undefined || numbers < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {

    let bigInteger = Math.max.apply(null, numbers)
    let smallInteger = Math.min.apply(null, numbers)

    let difference = bigInteger - smallInteger

    return difference
  }
}
function max(number) {

  if (number == undefined || number <= 2 || number.some(isNaN)) {

    return undefined;

  } else if (number.length % 2 == 0) {

    return undefined;

  } else {
     let lastElement = number[number.length - 1]
     let middleElement = number[number.length - (Math.ceil(number.length / 2))]
     let firstElement = number[0]

     let array = [firstElement, middleElement, lastElement]

     let largestValue = Math.max.apply(null, array)

     return largestValue;
  }
}

function middle(values) {
  let array = [];

  if (values == undefined) {

    return [];

  } else if (values.length < 3) {

    return [];

  } else if (values.length % 2 == 0) {
    return [];
  } else {
    let veryMiddleElement = values[values.length - (Math.ceil(values.length / 2))]
    let leftMiddleElement = values[(values.length - 1) - (Math.ceil(values.length / 2))]

    array.push(leftMiddleElement, veryMiddleElement)

    return array;
  }
}

function increasing(numbers) {
  if (numbers == undefined || numbers == []) {
    return undefined;
  } else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  } else {

    for (let i = 1; i < numbers.length; i++) {
      if ((numbers[i - 1] + 1) === numbers[i]) {
        i++
        if ((numbers[i - 1] + 1) === numbers[i]) {
          return true;
          break;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  }
}

function everywhere(values, x) {
  if (values == undefined || x === undefined) {
    return false;
  } else if (values.length < 1) {
    return false;
  } else if (!values.includes(x)) {
    return false;
  } else {

      for (let y = values.indexOf(x); y < values.length; y++) {
        if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
          return true;
          break;
        } else if (x === 0) {
          return false;
          break;
        } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
          return true;
          break;
        } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
          return true;
          break;
        } else {
          return false;
          break;
        }
      }
  }
}


function consecutive(numbers) {
  if (numbers == undefined) {
    return false;
  } else if (numbers.length < 3) {
    return false;
  } else if (numbers.some(isNaN)) {
    return false;
  } else {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0 && numbers[i + 2] % 2 === 0 && numbers[i + 1] !== undefined && numbers[i + 2] !== undefined) {
          return true;
          break;
        }

        if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0 && numbers[i + 2] % 2 !== 0 && numbers[i + 1] !== undefined && numbers[i + 2] !== undefined) {
          return true;
          break;
        } else {
          continue;
        }
      }
      return false;
  }
}

function balance(numbers) {
  let size = 0
  let sum1 = 0
  let sum2 = 0
  let count = 0
  if (!numbers || numbers.length < 2) {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (!(Number.isInteger(numbers[i]))) {
      return false;
    }
  }
  for (z = 0; z < numbers.length; z++) {
    if (numbers[z] == undefined) {
      return true;
    }
  }
  for (x = numbers.length; x > -1; x--) {
    sum1 = 0
    sum2 = 0
    for(y = numbers.length - x; y > -1; y--) {
      sum1 = sum1 + numbers[y]
    }
    for(a = numbers.length - 1; a > numbers.length - x; a--) {
      sum2 = sum2 + numbers[a]
    }
    if (sum2 == sum1) {
      count = 1
      return true;
    }
  }
  if (count == 0) {
    return false;
  }
}

function clumps(values) {
  if (!values) {
    return -1;
  }
  if (values.length < 2) {
    return 0;
  }
  let last = values[0];
  let current;
  let clump = 0
  let count = 0
  let count2 = 0
  for (x = 1; x < values.length; x++) {
    current = values[x]
    if (last === current) {
      clump = clump + 1
      for (y = x; y < values.length; y++) {
        last = current
        current = values[y]
        if (!(last === current)) {
          count = 1
          x = y
          break;
        }
        else {
          count = -1
        }
      }
    }
    if (count == -1) {
      break;
    }
    last = current
  }
  return clump;
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
