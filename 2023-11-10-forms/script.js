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
  console.dir(form.elements)
  
  // const name = form.querySelector('#name').value
  // const name = form.elements.name.value
  const name = form.name.value
  const surname = form.surname.value
  const age = form.age.value
  const phone = form.phone.value
  const email = form.email.value
  const itKnowledge = form['it-knowledge'].value
  const group = form.group.value

  console.log(name)

  if (name.length === 0 || surname.length === 0) {
    console.log('Forma uzpildyta neteisinga')

    return
  }

  console.log(surname)
  console.log(age)
  console.log(phone)
  console.log(email)
  console.log(itKnowledge)
  console.log(group)

  const interests = form.querySelectorAll('[name="interest"]:checked')

  for (let i = 0; i < interests.length; i++) {
    console.log(interests[i].value)
  }

  form.reset()
  itKnowledgeHandler()

  const studentsList = document.querySelector('#students-list')

  const studentItem = document.createElement('div')
  studentItem.classList.add('student-item')

  studentsList.prepend(studentItem)

  // studentsList.innerHTML = `<div class="student-item">
  //                             <h2>${name} ${surname}</h2>
  //                             <p>Age: ${age}</p>
  //                             <p>Phone: ${phone}</p>
  //                             <p>Email: ${email}</p>
  //                             <p>IT Knowledge: ${itKnowledge}</p>
  //                             <p>Group: ${group}</p>
  //                             <p>Interests: ...</p>
  //                             <button>Click</button>
  //                           </div>
  //                           ${studentsList.innerHTML}`
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
