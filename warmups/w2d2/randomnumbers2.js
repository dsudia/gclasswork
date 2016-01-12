var random0100 = Math.floor(Math.random() * (100-0)) + 0;

console.log(random0100);

function printMoreLess () {
  if (random0100 >= 40) {
    if ((random0100 % 2) === 0) {
      for (var i = random0100+1; i <= 100; i+=2) {
        console.log(i);
      };
    }
    else {
      for (var i = random0100; i <= 100; i+=2) {
        console.log (i);
      };
    };
  }
  else {
    if ((random0100 % 2) === 0) {
      for (var i = random0100+1; i <= 40; i+=2) {
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