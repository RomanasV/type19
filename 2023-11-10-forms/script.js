const testForm = document.querySelector('#test-form')

// testForm.addEventListener('submit', formSubmit)

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
  
  console.dir(age)
  console.dir(name)
  console.dir(color)
  console.dir(birthDate)
  console.dir(city)



  
  const favoriteLanguages = form.querySelectorAll('[name="favorite-language"]:checked')
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

itKnowledgeHandler()

const studentForm = document.querySelector('#student-form')
studentForm.addEventListener('submit', studentFormSubmit)

function studentFormSubmit(event) {
  event.preventDefault()

  // const name = document.querySelector('#name').value
  // const name = studentForm.querySelector('#name').value
  // const name = event.target.querySelector('#name').value

  const form = event.target

  // const name = form.querySelector('#name').value
  // const name = form.elements.name.value
  const name = form.name.value
  const surname = form.surname.value
  const age = form.age.value
  const phone = form.phone.value
  const email = form.email.value
  const itKnowledge = form['it-knowledge'].value
  const group = form.group.value

  if (name.length === 0 || surname.length === 0) {
    console.log('Forma uzpildyta neteisinga')

    return
  }

  const interests = form.querySelectorAll('[name="interest"]:checked')

  for (let i = 0; i < interests.length; i++) {
    console.log(interests[i].value)
  }

  form.reset()
  itKnowledgeHandler()

  const studentsList = document.querySelector('#students-list')
  const studentItem = createStudentItem(name, surname, age, phone, email, itKnowledge, group)
  studentsList.prepend(studentItem)
}

function createStudentItem(name, surname, age, phone, email, itKnowledge, group) {
  const studentItem = document.createElement('div')
  studentItem.classList.add('student-item')

  const studentNameElement = document.createElement('h2')
  studentNameElement.textContent = `${name} ${surname}`

  const ageElement = document.createElement('p')
  ageElement.textContent = `Age: ${age}`

  const phoneElement = document.createElement('p')
  phoneElement.textContent = `Phone: ${phone}`

  const emailElement = document.createElement('p')
  emailElement.textContent = `Email: ${email}`

  const itKnowledgeElement = document.createElement('p')
  itKnowledgeElement.textContent = `IT Knowledge: ${itKnowledge}`

  const groupElement = document.createElement('p')
  groupElement.textContent = `Group: ${group}`

  const interestsElement = document.createElement('p')
  interestsElement.textContent = `Interests: ...`

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete student'

  deleteButton.addEventListener('click', function() {
    studentItem.remove()
  })

  studentItem.append(studentNameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestsElement, deleteButton)

  return studentItem
}

function itKnowledgeHandler() {
  const itKnowledge = document.querySelector('#it-knowledge')
  const outputElement = document.querySelector('#it-knowledge-output')

  outputElement.textContent = itKnowledge.value

  itKnowledge.addEventListener('input', itKnowledgeChange)
}

function itKnowledgeChange(event) {
  const inputValue = event.target.value

  const outputElement = document.querySelector('#it-knowledge-output')
  outputElement.textContent = inputValue
}
