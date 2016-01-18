var price = 100
var discount = 0.1
var discprice

var calculator = function () {
  discprice = (price - (price * discount))
  if (discount >= 1 || discount === 0) {
    console.log("Warning: this discount doesn't make sense")
  } else {
    console.log('The discounted price is $' + discprice)
  }
}

calculator(price)
