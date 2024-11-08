// const form = document.getElementById("todo_form");
// const toDoInput = document.getElementById("todo_input");
// const caja = document.getElementById("caja");

// // ['tarea1', 'tarea2']
// let items = JSON.parse(localStorage.getItem("ToDoList")) || [];

// const saveToLocalStorage = () => {
//   localStorage.setItem("ToDoList", JSON.stringify(items));
// };

// const renderList = () => {
//   caja.innerHTML = items
//     .map((item) => {
//       return `
//       <p>${item}</p>
//     `;
//     })
//     .join("");
// };

// const submitHandler = (event) => {
//   event.preventDefault();
//   const item = toDoInput.value;
//   items.push(item);
//   // items = [
//   //   ...items,
//   //   item
//   // ]
//   toDoInput.value = "";
//   renderList();
//   saveToLocalStorage();
// };

// const init = () => {
//   renderList();
//   form.addEventListener("submit", submitHandler);
// };

// init();

/*
LocalStorage => espacio de almacenamiento dentro del navegador
  Metodos =>
          .setItem('key', value)
          .getItem('key')
        ['perro', 'gato'] => perro,gato

  JSON (JavaScript Object Notation)
    .stringify(value) => convierte a json
    .stringify(['perro', 'gato']) => "['perro', 'gato']"
    .parse("['perro', 'gato']") => parsea => ['perro', 'gato']

  Persistencia de datos => F5, cierre de pestañas o ventanas

SessionStorage
  Persistencia de datos => F5
  
  localStorage.setItem(
    "user",
    JSON.stringify({ name: "Francisco", lastName: "Perez" })
  );
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name);
*/

//-----------------Validaciones-------------------->
const form = document.getElementById("valid-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error_form");

const setError = (message) => {
  errorMessage.textContent = message;
  errorMessage.style.color = "red";
};

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(email);
};

const validateForm = () => {
  let valid = false;
  const emailValue = emailInput.value;
  const passValue = passwordInput.value;

  if (emailValue === "") {
    setError("El email no puede ser vacio");
    return;
  }

  if (!isValidEmail(emailValue)) {
    setError("Email con formato incorrecto");
    return;
  }

  if (passValue === "") {
    setError("La contraseña no puede ser vacio");
    return;
  }

  if (passValue.length < 6) {
    setError("La contraseña debe tener al menos 6 caracteres");
    return;
  }
  errorMessage.textContent = "";
  valid = true;
  return valid;
};

const submitHandler = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log("Formulario enviado correctamente");
  } else {
    console.log("Error en el form");
  }
};

const init = () => {
  form.addEventListener("submit", submitHandler);
};

init();
