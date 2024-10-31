const loginForm = document.getElementById('login--form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const errorMessage = document.getElementById('form__error')


const users = JSON.parse(localStorage.getItem('users')) || []


const saveToSessionStorage = (user) => {
    sessionStorage.setItem('activeUser', JSON.stringify(user))
}

const isEmpty = (input) => {
    return !input.value.trim().length
}

const showError = (message) => {
    errorMessage.textContent = message
}

const isExistingEmail = (input) => {
    return users.some((user) => user.email === input.value.trim())
}   

const isMatchingPass = (input) => {
    const user = users.find((user) => user.email === emailInput.value.trim()) 
    return user.password === input.value.trim()
}


const isValidAccount = () => {
    let valid = false

    if(isEmpty(emailInput)){
        showError('Por favor, completa los campos')
        return
    }

    if(isEmpty(passwordInput)){
        showError('Por favor, completa los campos')
        return
    }

    if(!isExistingEmail(emailInput)){
        showError('El email ingresado es invalido')
        return
    }

    if(!isMatchingPass(passwordInput)){
        showError('Las credenciales son incorrectas')
        return
    }


    valid = true
    errorMessage.textContent = ''
    return valid
}

const loginHandler = (e) => {
    e.preventDefault()
    if(isValidAccount()){
        const user = users.find((user) => user.email === emailInput.value.trim() )
        saveToSessionStorage(user)
        window.location.href = './home.html'
    }

}

const init = () => {
    loginForm.addEventListener('submit', loginHandler)
}

init()