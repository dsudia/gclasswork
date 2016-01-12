var getRandom1 = function () {
  return Math.random() * (10-1) + 1;
};

console.log(getRandom1());

var getRandom2 = function () {
  return Math.random()  * (10-1) + 1;
};

console.log(getRandom2());

var randomMean = function () {
  return(getRandom1() + getRandom2()) / 2;
};

console.log(randomMean());

var randomVariance = function() {
  return ((getRandom1() * getRandom1()) + (getRandom2() * getRandom2()))/2;
};

console.log(randomVariance());

var randomStdev = function () {
  return Math.sqrt(randomVariance());
};

console.log(randomStdev());

var random0100 = Math.floor(Math.random() * (100-0)) + 0;

console.log(random0100);

function printEven () {
  for (var i = 0; i <= random0100; i+=2) {
   console.log(i);
  }
};

printEven();

function printMoreLess () {
  if (random0100 >= 40) {
    if ((random0100 % 2) === 0) {
      for (var i = random0100; i <= 100; i+=2-1) {
        console.log(i);
      };
    }
    else {
      for (var i = random0100; i <= 40; i+=2) {
        console.log (i);
      };
    };
  }
  else {
    if ((random0100 % 2) === 0) {
      for (var i = random0100; i <= 100; i+=2-1) {
        console.log(i);
      };
    }
    else {
      for (var i = random0100; i <= 40; i+=2) {
        console.log (i);
      };
    };
  };
};

printMoreLess();