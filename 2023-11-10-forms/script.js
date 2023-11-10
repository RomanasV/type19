const testForm = document.querySelector('#test-form')

testForm.addEventListener('submit', formSubmit)

function formSubmit(event) {
  event.preventDefault()

  const form = event.target
  
  // const age = document.querySelector('#age').value
  // const name = form.querySelector('#name').value
  // const color = form.querySelector('#favorite-color').value

  // const age = form.elements.age.value
  // const name = form.elements.name.value
  // const color = form.elements.color.value
  // const birthDate = form.elements['birth-date'].value

  const age = form.age.value
  const name = form.name.value
  const color = form.color.value
  const birthDate = form['birth-date'].value
  // const city = form.querySelector('[name="city"]:checked').value
  const city = form.city.value
  const favoriteLanguages = form.querySelectorAll('[name="favorite-language"]:checked')

  console.dir(age)
  console.dir(name)
  console.dir(color)
  console.dir(birthDate)
  console.dir(city)
  console.log(favoriteLanguages)

  let favoriteLanguagesText = 'Favorite languages: '

  for (let i = 0; i < favoriteLanguages.length; i++) {
    if (i === favoriteLanguages.length - 1) {
      favoriteLanguagesText += favoriteLanguages[i].value + '.'
    } else {
      favoriteLanguagesText += favoriteLanguages[i].value + ', '
    }
  }

  console.log(favoriteLanguagesText)
}
