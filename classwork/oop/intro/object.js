var Human = function(firstName, lastName, age, homeTown, currentTown) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.homeTown = hometown;
  this.currentTown = currentTown;
  this.birthday = function() {
    this.age++;
    };
  this.move = function(city) {
    this.currentTown = city;
    };
  this.getFirstName = function() {
    return this.firstName;
    };
  this.getLastName = function() {
    return this.lastName;
    };
  this.setFirstName = function(newFirst) {
    if (typeof newFirst === 'string' && newFirst.length < 50) {
      this.firstName = newFirst;
    } else {
      console.log('First name must be a string and less than 50 characters');
    }
    };
  this.setLastName = function(newLast) {
    if (typeof newLast === 'string' && newLast.length < 50) {
      this.lastName = newLast;
    } else {
      console.log('Last name must be a string and less than 50 characters');
    }
    };
  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
};

var david = new Human('David', 'Sudia', 31, 'Oakland', 'Denver');

var natalie = new Human('Natalie', 'Sudia', 29, 'Banff', 'Boulder');

natalie.move('Denver');

function createChapstick () {
  var color = 'yellow';
  var flavor = 'lemon';
  var volume = 100;
  var capped = true;
  return {
    getColor: function() {
      return color;
    },
    getFlavor: function() {
      return flavor;
    },
    getVolume: function() {
      return volume;
    },
    cap: function() {
      this.capped = true;
      },
    uncap: function() {
      this.capped = false;
      },
    useOnce: function() {
      this.volume--;
      }
    };
}

var Chapstick = createChapstick();

var Human = function() {
  this.species = 'Homo Sapiens';
  this.legs = 2;
};

var Male = new Human() {
  this.gender = 'masculine';
};

var Man = new Male() {
  this.age = 18;
};
