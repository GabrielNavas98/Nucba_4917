//------------ addEventListener

const h2Alert = document.getElementById('h2Alert')

// console.dir(h2Alert)

const mostrarAlert = () => {
    alert('soy el onclick')
}

// h2Alert.onclick = mostrarAlert
h2Alert.addEventListener('click', mostrarAlert)
// h2Alert.addEventListener('click', () => {
//     alert('soy una funcion directamente en el escuchador')
// })


// ------------------ Focus / Blur

const inputBlur = document.getElementById('inputBlur')

const focusFunction = () => {
    inputBlur.style.backgroundColor = 'yellow'
}

const blurFunction = () => {
    inputBlur.style.backgroundColor = ''
}

// evento focus => cuando seleccionamos
inputBlur.addEventListener('focus', focusFunction)
// evento blur => cuando deseleccionamos
inputBlur.addEventListener('blur', blurFunction)


// console.dir(inputBlur)


//Change 

const inputChange = document.getElementById('inputChange')

inputChange.addEventListener('change', () => {
    console.log('Che cambie tu comida')
})

//event target

const botonTarget = document.getElementById('botonTarget')

botonTarget.addEventListener('click', (event) => {
    console.dir(event.target) // nos muestra el elemento que disparo el evento 
})


const foodInput = document.getElementById('foodInput')

const mostrarComida = (event) => {
    console.log(`Tu comida favorita es ${event.target.value}`); //podemos acceder al valor del target
}

foodInput.addEventListener('change', mostrarComida)

//preventDafault() / submit

const form = document.querySelector('#form')
const user = document.querySelector('#user')
const pass = document.querySelector('#pass')

form.addEventListener('submit', (e) => {
    e.preventDefault() //evitamos comportamiento por defecto
    console.log(`usuario: ${user.value} y pass ${pass.value}`);
    form.reset()
})


//stopPropagation()

const btnStop = document.getElementById('btnStop')
const container = document.getElementById('container')

container.addEventListener('click', () => {
    console.log('soy el container')
})

btnStop.addEventListener('click', (e) => {
    e.stopPropagation() //evitamos el click del padre
    console.log('soy el button')
})

// agregamos clase

const btnChange = document.getElementById('btnChange')
const h2Change = document.getElementById('h2Change')

// btnChange.addEventListener('click', () => {
//     // btnChange.classList.add('btn-primary')
//     btnChange.classList.remove('btn-primary')
// })


btnChange.addEventListener('click', () => {
    h2Change.classList.toggle('hidden')
})

// cambiamos atributos

const img = document.getElementById('img')
const imgChange = document.getElementById('imgChange')

imgChange.addEventListener('click', () => {
    // img.setAttribute('src', './img/messi1.jpg')
    // img.src = './img/messi2.jpg'
    // img.setAttribute('src', './img/messi5.jpg')
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber);

    img.src = `./img/messi${randomNumber}.jpg`
})