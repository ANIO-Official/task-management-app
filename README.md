# Module 4 SBA Task Management App
## SBA Overview
The purpose of this project is to demonstrate my ability apply what I've learned thus far to create a Task Management App that add tasks with deadlines, assign categories, and update the status of each task. This lab is focused on:

- Arrays
- DOM Manipulation
- Conditionals, and
- Creating & Accessing a Local Storage

The App should be **polished** *and* **functional**. Users should be able to:

- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., “In Progress,” “Completed,” “Overdue”).
- Have task that Automatically update task status based on the current date (tasks past their deadline will be marked as “Overdue”).
- Filter tasks by status or category.
- Have task data that persist using local storage so tasks are saved even after refreshing the page.

------------------------------------------------
## Table of contents

- [Overview](#overview)
  - [GitHub](#github)
  - [How To Use](#how-to-use)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Reflection Questions](#reflection-questions)
  - [Useful resources](#useful-resources)
- [Author](#author)

### GitHub Link
https://github.com/ANIO-Official/task-management-app 
### How To Use
1. Clone the repository or Download the ZIP file and extract the files.
2. Drag and Drop the HTML file into your browser of choice.
4. Interact with the website in the browser testing it's capabilities.

*Feel free to reference the Overview for a reminder of interactions that should be present.*

## My process
Quick brief about process. Here are my steps/general steps:
 1. Build HTML and Starter CSS with Bootstrap Librarys
 2. Code the functionality of the website in Javascript
 3. Run Tests using html file in browser and console.log
 4. Bug Fix, Removals, and Refactoring.

  Bullet Points

### Built with
- JavaScript
- Semantic HTML
- CSS
- Bootstrap CSS Library

## Reflection

 **Challenges**

  Forgot a # again for one of querySelector values leading to some undefined values. but a quick review fixed this.
  Reading the updated values of the checkboxes and categories took the most time from me. I struggled trying to use checkbox and grab it's value. It kept coming back undefined no matter my methods.

 **Approach to Challenges**

  Initially I tried to grab the single checked value of the status checkboxes but it returned undefined. So I tried grabbing all the status values then filtering using filter() method for the checked value; still undefined. I tried for loops, for of loops, and ultimately gave up on check boxes. 
  Due to the checkbox for status having too many issues occuring when accessing it's values, I changed it into a select input. Select was much easier for DOM Manipulation. Originally, I tried reading and trying out code from multiple resources for accessing checkbox values. This lead to too many dead ends and took precious time away from me being able to focus on other parts. I needed a value that could return so that I could update it for step 3 and filter by it in step 4.
  Additionally, I realized I was assigning the DOM manipulation variables for status and category too early. Unlike the input text field and the date field, the status and category values worked best when called as the button is pressed. Otherwise, it will set the variable to whatever the default checked value is or to undefined. 

 **Improvement**
  I'd like to make a Figma to figure out the design ahead of time to help with quicker styling of the webpage. Though Figma does take time too.
  I'd also like to figure out a way to make the render function cleaner. I know often there will be function nested occasionally but I felt like that one function has a lot of stuff going on compared to all my other functions.

### Useful resources
*There were a lot this time, so I'm just categorizing by source site or purpose*

**MDN Documentation**
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/radio
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select
https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/maxlength
https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
https://getbootstrap.com/docs/5.3/getting-started/introduction

**Styling Documentation**
https://fonts.google.com/
https://www.w3schools.com/jsreF/prop_style_liststyletype.asp

**Videos**
https://www.youtube.com/watch?v=1s4s_lU83pM
https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js

**Stack Overflow**
https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
https://stackoverflow.com/questions/1115310/how-can-i-add-a-class-to-a-dom-element-in-javascript
https://stackoverflow.com/questions/43115822/can-i-make-a-css-grid-with-dynamic-number-of-rows-or-columns
https://stackoverflow.com/questions/18414384/hide-element-by-class-in-pure-javascript
https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript

## Author

- LinkedIn - [Amanda Ogletree](https://www.linkedin.com/in/amanda-ogletree-a61b60168)