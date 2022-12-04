document.addEventListener("DOMContentLoaded", () => {
  // your code here

//for the input fields
const newTaskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");
const newTaskPriority = document.getElementById("new-task-priority");

//unordered list where new tasks will stay on the DOM
const newTaskUl = document.getElementById("tasks");

//attaching an event listener:
newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
event.preventDefault();

//to stop the form fro trying to submit:
const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.createElement("li");
newTask.innerText = newTaskDescription.value;

appendNewTask(newTask);
event.target.reset();
};

const appendNewTask = task => {
document.getElementById("tasks").appendChild(task);
};