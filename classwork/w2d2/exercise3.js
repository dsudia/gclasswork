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

