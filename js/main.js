var elForm = document.querySelector('.site-form') //form
var elInput = elForm.querySelector('.site-input') //input
var elSpan = elForm.querySelector('.result-span') //span
var elButton = elForm.querySelector('.button') //button

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  var resultInput = parseFloat(elInput.value.trim(), 10)

  if (isNaN(resultInput)) {
    elSpan.textContent = '?'
    alert(`Bo'sh malumot`)
    elInput.value = ''
    return
  }

  var elInputF = resultInput * 9 / 5 + 32
  elSpan.textContent = elInputF
})