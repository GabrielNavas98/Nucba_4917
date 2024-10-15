//getElementById() => nos devuelve un elemento que conicide con el id pasado por parametro.

const logo = document.getElementById('logo')
// console.log(logo);

// console.dir(logo) // .dir es la manera de ver en consola las propiedades completas
// logo.innerHTML = 'Holis'


//getElementsByClassName() => nos trae elementos por nombre de clase (HTMLCollection)

const links = document.getElementsByClassName('link')
// console.dir(links)
// console.dir(links[0])

// error htmlcolection no conoce metodos de arreglos
// links.forEach(link => {
//     console.log(link)
// });

const linksArray = [...links]
// console.log(linksArray);
// linksArray.forEach((link) => console.log(link))
// linksArray[0].innerHTML = 'Hola soy gonzalo'


//getElementsByTagName() => nos trae elementos segun el nombre etiqueta

const losP = document.getElementsByTagName('p')
// console.log(losP);

//querySelector() => nos trae el primer elemento que coicide con lo que le pasamos como parametro
const header = document.querySelector('.header') //por clase
// console.dir(header)
// console.log(header);

const headerByTag = document.querySelector('header') //por etiqueta
// console.dir(headerByTag)
// console.log(headerByTag);

const queryByID = document.querySelector('#container') //cor id
console.log(queryByID);

const losPDelDiv = queryByID.querySelector('#titulo')
console.dir(losPDelDiv)


//querySelectorAll() => nos trae un nodeList de los nodos que coinciden con lo que le pasamos

const pTags = document.querySelectorAll('p') //por nombre de etiqueta o por nombre de clase, o por id
// console.log(pTags);

// pTags.forEach(p => console.log(p))

