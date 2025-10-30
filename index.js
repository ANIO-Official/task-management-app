/////Global Variables/////
//Tasks Array-------------
let tasks = []

//New Task Specific Variables-------------
const taskName = document.querySelector("#taskName") //The text input
const deadline = document.querySelector("#deadline")
//set both later once button to create task is press to dynamically change value
let category
let status

//Task Display Area Variables-------------
let taskDisplayArea = document.querySelector("#taskDisplayArea")
let addTaskBtn = document.querySelector("#addTaskBtn")
let taskDetails = []

// //Create a div to be a card for task information in the Display Area
// let taskCard = document.createElement("div")
// taskCard.className = "taskCard"

//////////////////////////////
//      Data Storage        //
//////////////////////////////

//Creates a new task object, to be called on addTaskBtn EventListener
//Data only for Array | Stores Task into an Object
function createTask(taskName, category, deadline, status) {
    let newTask = {
        name: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: status.value,
    }
    console.log(tasks) //Check array for added task
    return newTask
}

//Adds task to array
//task parameter repressents all new task
function addTask(task) {
    /*set's the createTask()'s parameter to the input values from HTML 
    and places them into the variable parameter task to then push into the array*/
    task = createTask(taskName, category, deadline, status)
    tasks.push(task)
}

//////////////////////////////
//      Display Tasks       //
//////////////////////////////
//Reusable clear function set values to nada/nothing/0.
function clear(field) {
    field.value = ""
}

/*Function to call to append multiple children from the details array
so that they all can append to the parent div taskCard*/
function appendDetails(parentTask, details) {
    for (let detail of details) {
        parentTask.appendChild(detail)
    }
}

function renderTasks() {
    taskDisplayArea.innerHTML = ""

    //Create new listed task to display with Card appended
    for (let i = 0; i < tasks.length; i++) {
        let listItem = document.createElement("li")
        listItem.style.listStyleType = "none"
        listItem.innerText = tasks[i].name
        let newCard = document.createElement("div")
        newCard.className = "taskCard"
        /*Create the Task Details to display inside card.
        Shows: Name, Category, Deadline, and Status & Adds classes for CSS styling*/
        function taskCardSetup(card) {

            //Create a paragraph element for Task Name, Category, and Status
            let taskCardName = document.createElement("p")
            taskCardName.className = "cardName"

            let taskCardDeadline = document.createElement("p")
            taskCardDeadline.className = "cardDeadline"

            let taskCardCategory = document.createElement("p")
            taskCardCategory.className = "cardCategory"

            let taskCardStatus = document.createElement("p")
            taskCardStatus.className = "cardStatus"
            //assign paragraph elements innText using task object value
            taskCardName.innerText = tasks[i].name
            taskCardDeadline.innerText = tasks[i].deadline
            taskCardCategory.innerText = tasks[i].category
            taskCardStatus.innerText = tasks[i].status

            //Add the newly created task card information to the details array. Attach it to card.
            taskDetails = [taskCardName, taskCardDeadline, taskCardCategory, taskCardStatus]
            appendDetails(card, taskDetails)
        }
        taskCardSetup(newCard)
        listItem.appendChild(newCard) //Append taskCard to listItem
        taskDisplayArea.appendChild(listItem)
        console.log(`Displayed new list item`)//Check
    }
}

addTaskBtn.addEventListener("click", function () {
    category = (document.querySelector('input[name="category"]:checked'))
    status = document.querySelector("#statusSelect")
    let task = "newTask"
    addTask(task)
    renderTasks()
    clear(taskName)
    clear(deadline)
})
