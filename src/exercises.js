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
   // if (!values || values.length === 0) {
   //   return false;
   // }
//slice-- subset of the array

// let first =  ;
// let last =   ;
//
//   if (values !== undefined && values.length < 1 && n > 0 || values >= n.length){
//     console.log( )
//
//   } else {
//     console.log(values[""])
//   }
 }

function difference(numbers) {
  if (!numbers || numbers.length === 0){
    return false;
  }

  var largest = numbers[0];
  var smallest = numbers[0];

  for (var i = 1; i < numbers.length; i++) {

      if (numbers[i] > largest) {
          largest = numbers[i];
      }
      else if(numbers[i] < smallest) {
          smallest = numbers[i];
      }
}
  if (numbers === undefined && numbers >= 1 && !Number.isNaN(numbers)){
        return undefined;
      } else {
        return largest-smallest;
      }

  }

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
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
