var submit = document.getElementById('submission')
function getRandom () {
  return Math.floor(Math.random() * (100)) + 1
}

var rand = getRandom()
console.log(rand)

submit.addEventListener('click', function () {
  var response = document.getElementById('guess').value
  if (response < rand) {
    alert('Your number was too low!')
  } else if (response === rand) {
    alert('You win! You guessed the right number!')
  } else {
    alert('Your number was too high!')
  }
})
