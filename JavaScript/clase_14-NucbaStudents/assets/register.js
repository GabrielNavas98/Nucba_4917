const registerForm = document.getElementById('register-form')
const nameInput = document.getElementById('name')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')


const users = JSON.parse(localStorage.getItem('users')) || []

/*---------------Funciones auxiliares--------------------------------*/

const saveLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users))
} 

const isEmpty = (input) => {
    return !input.value.trim().length
}

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length < max
}

const isEmailValid = (input) =>{
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    return regex.test(input.value.trim())
}

const isExistingEmail = (input) => {
    return users.some((user) => user.email === input.value.trim() )
}

const isPassSecure = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

    return regex.test(input.value.trim())
}

const isPhoneValid = (input) => {
    const regex = /^[0-9]{10}$/

    return regex.test(input.value.trim())
}


const showError = (input, message) => {
    const formField = input.parentElement
    formField.classList.remove('success')
    formField.classList.add('error')
    const error = formField.querySelector('small')
    error.style.display = 'block'
    error.textContent = message
}

const showSuccess = (input) => {
    const formField = input.parentElement
    formField.classList.remove('error')
    formField.classList.add('success')
    const error = formField.querySelector('small')
    error.textContent = ''
    error.style.display = 'none'
}
/*-----------------Funciones de validación de inputs-------------------*/

const checkTextInput = (input) => {
    let valid = false
    const maxCharacters = 16
    const minCharacters = 3

    if(isEmpty(input)){
        showError(input, 'El campo es obligatorio')
        return
    }

    if( !isBetween(input, minCharacters, maxCharacters)){
        showError(input, `Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`)
        return
    }

    showSuccess(input)
    valid = true
    return valid
}


const checkEmail = (input) => {
    let valid =  false


    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isEmailValid(input)){
        showError(input, 'El email no es valido')
        return
    }

    if(isExistingEmail(input)){
        showError(input, 'Este email ya esta registrado')
        return
    }

    showSuccess(input)
    valid = true
    return valid
}

const checkPassword = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isPassSecure(input)){
        showError(input, 'La contraseña debe tener al menos 8 caracteres, una mayúscula, miniscula, un numero y un carácter especial')
        return
    }
    //una mayúscula, miniscula, un numero y un carácter especial y 8

    showSuccess(input)
    valid = true
    return valid
}

const checkPhone = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isPhoneValid(input)){
        showError(input, 'El telefono solo debe tener 10 caracteres numericos')
        return
    }

    showSuccess(input)
    valid = true
    return valid
}


/*-----------validación general y almacenamiento de datos---------------*/
const submitHandler = (e) => {
    //prevenimos el comportamiento por defecto
    e.preventDefault()
    // validar los inputs
    let isNameValid = checkTextInput(nameInput)
    let isLastNameValid = checkTextInput(lastNameInput)
    let isEmailValid = checkEmail(emailInput)
    let isPassValid = checkPassword(passwordInput)
    let isPhoneValid = checkPhone(phoneInput)

    let isValidForm =
        isNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isPassValid &&
        isPhoneValid

    if(isValidForm){
        // agregar al usuario
        users.push({
            name: nameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            password: passwordInput.value,
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        })
        // guardar en el localStorage
        saveLocalStorage()
        // informar al usuario
        alert('Te registraste con exito!!')
        // redirigir al login
        window.location.href = 'login.html'
    }


}



const init = () => {
    registerForm.addEventListener('submit', submitHandler)
    nameInput.addEventListener('input', () => checkTextInput(nameInput))
    lastNameInput.addEventListener('input', () => checkTextInput(lastNameInput))
    emailInput.addEventListener('input', () => checkEmail(emailInput))
    passwordInput.addEventListener('input', () => checkPassword(passwordInput))
    phoneInput.addEventListener('input', () => checkPhone(phoneInput))
}

init()