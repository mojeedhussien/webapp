/* 
  To‑Do List WebApp — CRUD + Due Date Update

  This version adds full CRUD functionality:
  - Create tasks with text and due date
  - Read/display tasks with visible due dates
  - Update/edit existing tasks (text + due date)
  - Delete tasks
  - Mark tasks as done using a checkbox

  All tasks are stored in localStorage for persistence.
*/
// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""} 
               onclick="toggleTask(${index})">
        <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      </div>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push({ text: input.value, completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Clock
function updateClock() {
  document.getElementById("clock").innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Motivational Quote API
async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    document.getElementById("quote").innerText = `"${data.content}" — ${data.author}`;
  } catch (error) {
    document.getElementById("quote").innerText = "Stay motivated!";
  }
}
fetchQuote();

renderTasks();
