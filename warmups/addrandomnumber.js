var randNum = function getRandomInt () {
  return Math.floor(Math.random() * (10000 - 1000)) + 1000
}

function addDigits (num) {

  var string = num.toString()
  var arr = string.split('')
  var sumArr = []
  var i = 0
  
  console.log(arr)
  
  for (i = 0; i < 4; i++) {
    var sum = 0
    var j = 0
    for (j = 0; j < arr.length; j++) {
      
      sum += parseInt(arr[j], 10)
      console.log(sum)
    }
    
    sumArr.push(sum)
    arr.shift()
  }
  
  console.log(sumArr)
}

addDigits(randNum())
