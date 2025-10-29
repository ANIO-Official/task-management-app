/////Global Variables/////
//Tasks Array
let tasks = []

//New Task Specific Variables
let taskName = document.querySelector("#taskName") //The text input
let category = document.querySelector("categoryChoice:checked")
let deadline = document.querySelector("#deadline")
let status = document.querySelector(".statusCheckbox:checked")

//Task Display Area Variables
let taskDisplayArea = document.querySelector("#taskDisplayArea") 
let addTaskBtn = document.querySelector("#addTaskBtn")

//////////////////////////////
//      Data Storage        //
//////////////////////////////

//Creates a new task object, to be called on addTaskBtn EventListener
//Data only for Array | Stores Task into an Object
function createTask(taskName, category, deadline, status){
    let newTask = {
        taskName: taskName.value,
        category: category.innerText,
        deadline: deadline.value,
        status: status.innerText,
    }
    return newTask
}

//Adds task to array
//task parameter represents all new task
function addTask(task){
    /*set's the createTask()'s parameter to the input values from HTML 
    and places them into the variable parameter task to then push into the array*/
    task = createTask(taskName, category, deadline, status)
    tasks.push(task)
}

//////////////////////////////
//      Display Tasks       //
//////////////////////////////

function renderTasks(){
    taskDisplayArea.innerHTML = ""

    let listItem = document.createElement("li")
    listItem.innerText = taskName.value //provides title for list item
    listItem.style.listStyleType = "none"
    listItem.className = "taskHeader"
    console.log(`Added ${listItem} to list`)
    taskDisplayArea.appendChild(listItem)
}

addTaskBtn.addEventListener("click", function(){
    renderTasks()
})


// //test to see if createTask function works in console.

// let task1 = createTask("John's Birthday", "Family", "05/22/2026", "On Hold")
// //console.log(task)

// //Test pushing it into array
// tasks.push(task)
// console.log(tasks)