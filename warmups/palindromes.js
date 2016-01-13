var pdrome = "anna"
var notpdrome = "blob"
var pdromespace = "race car"

function pdrometest (string) {
  string = string.replace(/\s/g, "")
  var array = string.split("");
  var revarray = [];
  
  for (var i = array.length - 1; i >= 0; i--) {
    revarray.push(array[i])
  };

  var revstring = revarray.join("")
  if (string === revstring) {
    console.log(true);
  }
  else {
    console.log(false);
  };
}

pdrometest(notpdrome);

pdrometest(pdrome);

pdrometest(pdromespace)