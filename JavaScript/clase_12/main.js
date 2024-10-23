let card = document.createElement('div')
card.classList.add('card')

const cardImg = document.createElement('img')
cardImg.src = 'https://via.placeholder.com/150'
cardImg.classList.add('card-img')

const cardTitle = document.createElement('h3')
cardTitle.classList.add('card-title')
cardTitle.innerText = 'Titulo de la tarjeta'

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')
cardBody.innerText = 'Contenido de la tarjeta'

const cardButton = document.createElement('button')
cardButton.classList.add('card-button')
cardButton.innerText = 'Click'

card.appendChild(cardImg)
card.appendChild(cardTitle)
card.appendChild(cardBody)
card.appendChild(cardButton)

const cardContainer = document.querySelector('.card-container')
cardContainer.appendChild(card)

//innerHtml
const parrafo = document.querySelector('.parrafo')
parrafo.innerHTML = 'Este es el nuevo contenido'

// console.log(parrafo.innerHTML);

//innerHtml + eqtiquetas
const caja = document.querySelector('.caja')
caja.innerHTML = '<h2>Este es el contenido nuevo de la caja</h2>' 

//innerHtml + templateStrings

const titulo = 'Titulo de la caja'
const animales = ['Perro', 'Gato', 'Pez', 'Tortuga']

caja.innerHTML = `
  <h2>${titulo}</h2>
  <p>Lorem ipsum</p>
  ${animales.map((animal) => `<p>Hola soy ${animal}</p>`).join('')}
  <button>Click</button>
`

console.log(animales.map((animal) => `<p>Hola soy ${animal}</p>`).join(''));


//funcion generadora
const contenedorGeneradora = document.querySelector('.fn-generadora')

const cardInfo = {
  title: 'Card Title',
  description: 'Card description de la imagen',
  image: 'https://picsum.photos/250/200'
}

const createCardTemplate = (card) => {
  const {title, description, image} = card
  return `
      <div class='card'>
        <img src='${image}' alt='${title}'/>
        <h3 class='card-title'>${title}</h3>
        <p>${description}</p>
      </div>
    `
}

contenedorGeneradora.innerHTML = createCardTemplate(cardInfo)

// en base a un array
const animalesInfo = [
  {
    name: 'Perro',
    description: 'Es un aniaml que Ladra'
  },
  {
    name: 'Gato',
    description: 'es un animal que maulla'
  },
  {
    name: 'Pez',
    description: 'es un animal que nada'
  },
  {
    name: 'tortuga',
    description: 'es un animal lento'
  }
]

const createCardTemplateArray = (animal) => {
  const {name, description} = animal
  return `
    <div class='card'>
      <h3 class='card-title'>${name}</h3>
      <p>${description}</p>
    </div>
  `
}

const cardsTemplate = animalesInfo.map(createCardTemplateArray).join('')


contenedorGeneradora.innerHTML += cardsTemplate


//JSON => Javascript object notation
const user = {
  name: 'Juan',
  age: '38',
  type : 'admin'
}

console.log(user);
//convertimos a json
console.log(JSON.stringify(user));

//convertimos a objeto
console.log(JSON.parse('{"name":"Juan","age":"38","type":"admin"}'));


//ObjectStorage

localStorage.setItem('usuario', 'Alex')
// localStorage.Curso = 'FullStack dev'

const localStorageContainer = document.querySelector('.localStorage')

const userName = localStorage.getItem('usuario')
const curso = localStorage.getItem('Curso')

console.log(localStorage);


localStorageContainer.innerText = `el usuario ${userName} tiene el curso ${curso}`

// sessionStorage.setItem('ColorFavorito', 'Rojo')