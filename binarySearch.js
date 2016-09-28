/* 
 * Binary search
 */

var numbersArray = function() {
  var current = 0;
  var top = 100000;
  var array = [];
  if(top)  {
    while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      array.push(current);
    }
  }
  return array;
};
// console.log(numbersArray());
var date = new Date();
var totalTime = 0;
function binarySearch(array, min, max, searchNum) {
  var half = Math.floor((max + min)/2);
  console.log('min-max', min, max, half, array[half]);
  if (max < min) {
    return -1;
  } else if (array[half] < searchNum) {
    min = half + 1;
    binarySearch(array, min, max, searchNum);
  } else if (array[half] > searchNum) {
    max = half - 1;
    binarySearch(array, min, max, searchNum);
  } else if (array[half] === searchNum) {
    var newDate = new Date();
    totalTime = newDate - date;
    console.log('num', searchNum, totalTime);
    return searchNum;
  }
}
var arrayNumbers = numbersArray().sort(function(a, b){return a - b;});
console.log(arrayNumbers);
binarySearch(arrayNumbers, 0, arrayNumbers.length - 1, 1000);
