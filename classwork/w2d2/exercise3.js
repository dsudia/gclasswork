console.log("Problem 1.1");

var string1 = "Oy! I am a normal string!";

function findOs (string) {
  var string2=string.toUpperCase();
  for (i=0; i<string2.length+1; i++) {
    if (string2.charAt(i)==="O") {
      console.log(i);
    }
  };
};

findOs(string1);

console.log("Problem 1.2");

var num1 = 12345678

function insertdash (num) {
  var str = num.toString();
  var numarr = str.split("");
  for (i = 2; i < numarr.length; i+=3) {
    numarr.splice(i, 0, "-");
  };
  console.log(numarr.join(""));
};

insertdash(num1);

console.log("Problem 1.3");

var arr = [1, "a", 2, "b", 3, "c"]

function notnumbers (array) {
  for (i=0; i < array.length; i++) {
    if ((typeof array[i]) !== 'number') {
      array.splice(i, 1);
    };
  };
  console.log(array);
};

notnumbers(arr);

//Pull a random item from an array
console.log("Problem 1.4")

var arr2 = ["bob", "ann", "mark", "steve", "roger"]
// Declaring a function and giving it the name randarray with the 
// parameter of array. 
function randArray (array) {
  // Declaring a variable with the name randMax. Giving randMax
  // a value of array.length (which will determine the length of the
  // array).

  // why? To store that length as a variable for use in a later function.
  var randMax = array.length;
  // Declaring a variable with the name randIndex. Giving randindex
  // a value of a function. 
  // The function has been declared and named randomInt and given 
  // the parameters of max and min. 
  var randIndex = function randomInt(max, min) {
    // We run the Math.random() method and then multiply it with
    // randMax (which is put in for max) and 0 (which is put in for min).
    // We then add 0 (the min) again. 

    // why? This will return a random integer between min (included) and 
    // max (included). 

    // We then run Math.floor on the results, which returns the largest
    // integer less than or equal to a given number.
    // The return then ends the function and returns the result for further
    // work.
    return Math.floor(Math.random() * (randMax - 0)+0);
  };
  // Declaring a variable and giving it the name randItem. Giving it a 
  // value of the item of array at an index of randIndex.
  var randItem = array[randIndex()];
  // Logging into the REPL the string "You randomly chose:" and
  // randitem.
  console.log("You randomly chose: " + randItem);
}

randArray(arr2)

console.log("Problem 2.1");

var superCal = "supercalifragilisticexpialidocious";

function alphabet (string) {
//split string into an array and assign to a new variable
  var array = string.split("");
//call the sort method the array into alphabetical order
  array.sort();
//join the array back into a string
  var alphaString = array.join("");
//log the new string to the console
  console.log(alphaString);
}

alphabet(superCal);

console.log("Problem 2.2")

var findLongWord = 'Web Development Tutorial';

function longestWord (string) {
//split the string at spaces to separate the words into different array items
  array = string.split(" ");
//loop through each array item and measure its length, compare the length to a previously set variable, 
//and if it's more, set it as the new value of that variable, then set the variable longestItem as that index item
  var itemLength = 0;
  var longestItem = '';
  for (i = 0; i < array.length; i++) {
    if (array[i].length > itemLength) {
      itemLength = array[i].length;
      longestItem = array[i];
    }
  }
//log longest item
  console.log(longestItem)
};

longestWord(findLongWord);

console.log('Problem 3.1')

var yearstr = "1470"

function addyear (string) {
  var array = string.split("")
  for (i = 0; i < array.length; i++) {
    
  }
}