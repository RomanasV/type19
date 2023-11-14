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

console.dir(newParagraph)

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase'
console.dir(newParagraph.className)


