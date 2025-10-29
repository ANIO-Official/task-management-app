/////Global Variables/////
//Tasks Array
let tasks = []
//New Task Specific Variables
// let taskName = document.querySelector("#taskName")
// let category = document.querySelector('input[name="category":checked')
// let deadline = document.querySelector("#deadline")
// let status = document.querySelector('.statusCheckbox:checked')

//Creates a new task object, to be called on addTaskBtn EventListener
//Data only for Array
function createTask(taskName, category, deadline, status){
    let newTask = {
        taskName: taskName,//.value,
        category: category,//.innerText,
        deadline: deadline,//.value,
        status: status//.innerText,
    }
    return newTask
}

//test to see if createTask function works in console.

let task = createTask("John's Birthday", "Family", "05/22/2026", "On Hold")
//console.log(task)

//Test pushing it into array
tasks.push(task)
console.log(tasks)