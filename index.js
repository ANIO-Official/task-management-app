/////Global Variables/////

//Tasks Array-------------
let tasks = []
let displayedTasks = []
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
let currentDate = Date()
let statusFilter = document.querySelector("#statusFilter")
let categoryFilter = document.querySelector("#categoryFilter")

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
    console.log("Tasks in array: " + tasks) //Check array for added task
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
        let newCard = document.createElement("div")
        newCard.className = "taskCard"
        newCard.category = (tasks[i].category)
        newCard.status = (tasks[i].status)

        /*Create the Task Details to display inside card.
        Shows: Name, Category, Deadline, and Status & Adds classes for CSS styling*/
        function taskCardSetup(card) {

            //Create a paragraph element for Task Name, Category, and Status
            let taskCardName = document.createElement("p")
            taskCardName.className = "cardName"

            let taskCardDeadline = document.createElement("p")
            taskCardDeadline.className = "cardDeadline"

            let overdueTag = document.createElement("p")
            overdueTag.style.color = "red"

            let taskCardCategory = document.createElement("p")
            taskCardCategory.className = "cardCategory"

            let taskCardStatus = document.createElement("button")
            taskCardStatus.className = "cardStatus"

            //Add Event Listener to Status Button
            taskCardStatus.addEventListener("click", function () {
                switch (taskCardStatus.innerText) {
                    case ("Pending"):
                        taskCardStatus.innerText = "Started"
                        tasks[i].status = "Started"
                        taskCardStatus.style.background = "linear-gradient(hsla(207, 70%, 26%, 1.00), hsla(157, 69%, 66%, 1.00))"
                        taskCardStatus.innerText = tasks[i].status
                        taskCardStatus.value = tasks[i].status
                        newCard.status = tasks[i].status
                        break;
                    case ("Started"):
                        taskCardStatus.innerText = "Completed"
                        tasks[i].status = "Completed"
                        taskCardStatus.style.background = "linear-gradient(hsla(128, 67%, 28%, 1.00), hsla(101, 73%, 60%, 1.00))"
                        taskCardStatus.innerText = tasks[i].status
                        taskCardStatus.value = tasks[i].status
                        newCard.status = tasks[i].status
                        break;
                    case ("Completed"):
                        taskCardStatus.innerText = "Pending"
                        tasks[i].status = "Pending"
                        taskCardStatus.style.background = "linear-gradient(hsla(22, 74%, 37%, 1.00), hsla(44, 100%, 68%, 1.00))"
                        taskCardStatus.innerText = tasks[i].status
                        taskCardStatus.value = tasks[i].status
                        newCard.status = tasks[i].status
                        break;

                    default:
                        console.log("Error when switching status.")
                        break;
                }
            })

            //assign paragraph elements innText using task object value
            taskCardName.innerText = tasks[i].name
            taskCardDeadline.innerText = tasks[i].deadline
            taskCardCategory.innerText = tasks[i].category
            taskCardStatus.innerText = tasks[i].status
            taskCardStatus.style.background = "linear-gradient(hsl(234, 100%, 63%), hsl(177, 79%, 60%))"
            taskCardStatus.value = tasks[i].status

            //Add the newly created task card information to the details array. Attach it to card.
            taskDetails = [taskCardName, taskCardDeadline, taskCardCategory, taskCardStatus]
            //Checks dates for any overdue items to update
            if (Date.parse(tasks[i].deadline) < Date.parse(currentDate)) {
                taskDetails.push(overdueTag)
                overdueTag.innerText = "OVERDUE"
                console.log("This task is overdue!")
            }
            //Append all details to Card
            appendDetails(card, taskDetails)

        }
        taskCardSetup(newCard)
        displayedTasks.push(newCard) //Send new card to display list
        listItem.appendChild(newCard) //Appends taskCard to listItem
        taskDisplayArea.appendChild(listItem)
        console.log(`Displayed new list item`)//Check
    }
}

//////////////////////////////
//  Main Button & Selects   //
//////////////////////////////
addTaskBtn.addEventListener("click", function () {
    category = (document.querySelector('input[name="category"]:checked'))
    status = document.querySelector("#statusSelect")
    let task = "newTask"
    addTask(task)
    renderTasks()
    clear(taskName)
    clear(deadline)
})

//Look for the style or category, hide all false
statusFilter.addEventListener("change", function () {
    console.log(`Filter: ${statusFilter.value}`)//check filter 

    for (let i = 0; i < displayedTasks.length; i++) {
        if (displayedTasks[i].status !== statusFilter.value) {
            displayedTasks[i].style.display = "none"
        } 
        else if (displayedTasks[i].status === statusFilter.value) {
            displayedTasks[i].style.display = "block"
        }
        else if (displayedTasks[i].status !== statusFilter.value && statusFilter.value == "default") {
            displayedTasks[i].style.display = "block"
        }
    }
})
categoryFilter.addEventListener("change", function () {
    console.log(`Filter: ${categoryFilter.value}`)//check filter 
    for (let i = 0; i < displayedTasks.length; i++) {
        if (displayedTasks[i].category !== categoryFilter.value) {
            displayedTasks[i].style.display = "none"
            console.log(`hiding ${displayedTasks[i].category}`)
        } 
        else if (displayedTasks[i].category === categoryFilter.value) {
            displayedTasks[i].style.display = "block"
            console.log(`showing ${displayedTasks[i].category}`)
        }
        else if (displayedTasks[i].category !== categoryFilter.value && categoryFilter.value == "default") {
            displayedTasks[i].style.display = "block"
            console.log(`showing ${displayedTasks[i].category}`)
        }
    }

})


