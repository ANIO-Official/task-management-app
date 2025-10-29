/////Global Variables/////
//Tasks Array
let tasks = []

//New Task Specific Variables
let taskName = document.querySelector("#taskName") //The text input
let category = document.querySelector(".categoryChoice:checked")
let deadline = document.querySelector("#deadline")
let status = document.querySelector(".statusCheckbox").checked

//Task Display Area Variables
let taskDisplayArea = document.querySelector("#taskDisplayArea") 
let addTaskBtn = document.querySelector("#addTaskBtn")
let taskDetails = []
//Create a div to be a card for task information in the Display Area
let taskCard = document.createElement("div")
taskCard.className = "taskCard"

//////////////////////////////
//      Data Storage        //
//////////////////////////////

//Creates a new task object, to be called on addTaskBtn EventListener
//Data only for Array | Stores Task into an Object
function createTask(taskName, category, deadline, status){
    let newTask = {
        taskName: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: status.value,
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
//Reusable clear function set values to nada/nothing/0.
function clear(field){
    field.value = ""
}

/*Function to call to append multiple children from the details array
so that they all can append to the parent div taskCard*/
function appendTaskDetails(parentTask, details){
    for (let detail of details){
        parentTask.appendChild(detail)
    }
}

function renderTasks(){
    taskDisplayArea.innerHTML = ""

    let listItem = document.createElement("li")
    // listItem.innerText = taskName.value //provides title for list item
    listItem.style.listStyleType = "none"
    listItem.className = "taskHeader"
    console.log(`Displayed ${listItem.innerText} to list`)//Check
    taskDisplayArea.appendChild(listItem)

    taskCardSetup() //Append details to taskCard div
    listItem.appendChild(taskCard) //Append taskCard to listItem
}

/*Create the Task Details to display inside a div by adding them into taskDetail array.
Shows: Name, Category, Deadline, and Status & Adds classes for CSS styling*/
function taskCardSetup(){
    //Create a paragraph element for Task Name, Category, and Status
    let taskCardName = document.createElement("p")
    taskCardName.className = "cardName"
    taskCardName.innerText = taskName.value

    let taskCardDeadline = document.createElement("p")
    taskCardDeadline.className = "cardDeadline"
    taskCardDeadline.innerText = deadline.value

    let taskCardCategory = document.createElement("p")
    taskCardCategory.innerText = category.value
    taskCardCategory.className = "cardCategory"

    let taskCardStatus = document.createElement("p")
    taskCardStatus.innerText = status.value
    taskCardStatus.className = "cardStatus"

    //Add the newly created task card to the details array
    taskDetails = [taskCardName, taskCardDeadline, taskCardCategory, taskCardStatus]
    appendTaskDetails(taskCard, taskDetails)
}

addTaskBtn.addEventListener("click", function(){
    let task = "newTask"
    addTask(task)
    renderTasks()
    clear(taskName)
    clear(deadline)
    
})
