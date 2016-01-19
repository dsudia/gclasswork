// globals
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var test1 = 'Oligopoly';
var test2 = 'Zoom';
var test3 = 'Bzz';

//helper functions
var splitString = function (str) {
  return str.split('');
};

var toLower = function (str) {
  return str.toLowerCase();
};

var vowelParse = function (array) {
  var vowelArray = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (array[i] === vowels[j]) {
        vowelArray.push(array[i]);
      }
    }
  }
  return vowelArray;
};

var vowelCompare = function (array1, array2) {
  if (!array1.length) {
    return false;
  } else {
    for (i = 1; i < array1.length; i++) {
      for (j = array1.length; j >= 0; j--) {
        if (array1[i] === array1[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};

//main function
function compareVowels (str) {
  var strLower = toLower(str);
  var splitArray = splitString(strLower);
  var vowelArray = vowelParse(splitArray);
  var clone = vowelArray.slice(0);
  var solution = vowelCompare(vowelArray, clone);
  console.log(solution);
}

//show results
console.log(test1);
compareVowels(test1);
console.log(test2);
compareVowels(test2);
console.log(test3);
compareVowels(test3);
