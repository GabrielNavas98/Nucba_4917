//definiciones de variables
const taskContainer = document.querySelector('.tasks-list')
const deleteAllBtn = document.querySelector('.deleteAll-btn')
const addForm = document.querySelector('.add-form')
const inputTask = document.querySelector('.input-text')

let taskList = JSON.parse(localStorage.getItem('tasks')) || []

//helpers
const createTaskTemplate = (task) => {
  return `
    <li>
      ${task.name}
      <img
        class="delete-btn"
        src="./img/delete.svg"
        alt="boton de borrar"
        data-id=${task.id}
      />
    </li>
  `
}

const isValidTask = (taskName) => {
  let isValid = true

  if(!taskName.length){ //taskName.length === 0
    alert('Por favor, ingresa una tarea')
    isValid = false
  }else if(
    taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
  ){
    alert('Ya existe la tarea con el mismo nombre')
    isValid = false
  }
  return isValid
}

const correctInputValue = () => {
  return inputTask.value.trim().replace(/\s+/g, ' ') //sanitización el input
}

const saveLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

const refreshUI = () => {
  renderTaskList()
  toggleDeleteAllBtn()
  saveLocalStorage()
}


//eventHandlers
const renderTaskList = () => {  
  taskContainer.innerHTML = taskList.map((task) => createTaskTemplate(task)).join('')
}

const toggleDeleteAllBtn = () => {
  if(!taskList.length){ //taskLst.length === 0
    deleteAllBtn.classList.add('hidden')
    return
  }
  deleteAllBtn.classList.remove('hidden')

}

const addTask = (event) => {
  event.preventDefault()
  const taskName = correctInputValue()
  if(isValidTask(taskName)){
    taskList = [
      ...taskList,
      {
        name: taskName,
        id: Date.now() //sirve para id unico
      }
    ] 
    addForm.reset()
    refreshUI()
  }
}

const removeTask = (e) => {
  if(!e.target.classList.contains('delete-btn')) return
  const filterId = Number(e.target.dataset.id)
  taskList = taskList.filter((task) => task.id !== filterId)
  refreshUI()
}

const removeAll = () => {
  taskList = []
  refreshUI()
}

//init
const init = () =>{
  document.addEventListener('DOMContentLoaded', renderTaskList)
  document.addEventListener('DOMContentLoaded', toggleDeleteAllBtn)
  addForm.addEventListener('submit', addTask)
  taskContainer.addEventListener('click', removeTask)
  deleteAllBtn.addEventListener('click', removeAll)
}

init()



// DRY =>  dont repeat yourself
// Principio de responsabilidad unica => una funcion debe de cumplir una sola tarea