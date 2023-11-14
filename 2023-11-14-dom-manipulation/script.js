// Paselektinti HTML elementą
const paragraph = document.querySelector('p')
paragraph.textContent = 'Labas rytas'
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">rytas</span>'

// Sukurti HTML elemntą
const spanElement = document.createElement('span')
spanElement.textContent = '!'

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement)

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement)

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement)

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement)

// Remove - pašalina HTML elementą
spanElement.remove()

const newParagraph = document.createElement('p')
newParagraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi a ab voluptatum ducimus voluptate porro aspernatur officia, doloribus tenetur qui earum? Quam omnis blanditiis at ullam nobis aperiam tenetur.'

paragraph.after(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase'
console.log(newParagraph.className)

// newParagraph.className = 'trecia-klase'
// newParagraph.className = newParagraph.className + ' trecia-klase'
newParagraph.className += ' trecia-klase'
console.log(newParagraph.className)

// Prideda klasę prie HTML elemento
newParagraph.classList.add('ketvirta-klase')
newParagraph.classList.add('penkta-klase', 'sesta-klase')

// Pašalina klasę iš HTML elemento
newParagraph.classList.remove('antra-klase')
newParagraph.classList.remove('penkta-klase', 'sesta-klase')

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('pirma-klase', 'antra-klase')

// Prideda klasę prie HTML elemento, jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę jau turi
newParagraph.classList.toggle('toggle-klase') // prideda
newParagraph.classList.toggle('toggle-klase') // pašalina
newParagraph.classList.toggle('toggle-klase') // prideda

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('antra-klase'))
console.log(newParagraph.classList.contains('pirma-klase'))
console.log(newParagraph.classList.contains('antra'))

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id'
console.log(newParagraph.id)

const link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

// link.href = 'https://www.google.com'
// link.target = '_blank'
link.setAttribute('href', 'https://www.google.com')
link.setAttribute('target', '_blank')
link.setAttribute('title', 'cia yra nuoroda')
link.setAttribute('class', 'nuorodos-klase')
link.setAttribute('class', 'antra-nuorodos-klase')
link.setAttribute('id', 'nuorodos-id')

console.log(link.getAttribute('id'))
console.log(link.id)

console.log(link.getAttribute('class'))
link.removeAttribute('class')
console.log(link.getAttribute('class'))

const attrName = 'target'
const attrValue = '_blank'

link.setAttribute(attrName, attrValue)

console.dir(link)