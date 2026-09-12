# 📝 To‑Do List WebApp

## 📖 Overview
This project is a simple **To‑Do List web application** built with **HTML, CSS, and JavaScript**.  
It demonstrates how to structure a frontend project, link styles and scripts correctly, and use JavaScript to dynamically update the DOM.

Users can:
- Add tasks  
- Mark tasks as completed  
- See tasks update live on the page  

---

## 🛠️ How It Was Built
- **HTML structure**:  
  `index.html` defines the layout — input field, add button, and task list.

- **CSS styling**:  
  `style.css` provides a clean, minimal design with styled buttons and task items.

- **JavaScript logic**:  
  `app.js` handles all functionality:
  - Adding tasks to the list  
  - Marking tasks as completed  
  - Updating the DOM dynamically  

- **Addition Assignment Operator (`+=`)**:  
  Used in string concatenation and counters to accumulate values and update the UI.

---

## 📂 Project Structure

What Was Added / Updated
Due date support  
Tasks now include a dueDate property and display it in the UI.

Edit functionality  
Users can update an existing task’s text and due date using the new editTask() function.

Mark as done  
A checkbox toggles the completed state and applies a strikethrough style.

Improved render logic  
The UI now shows task text, completion status, and due date together.

LocalStorage persistence  
All CRUD operations update localStorage so tasks remain saved.



