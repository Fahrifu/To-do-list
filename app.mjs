// DOM elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('TaskList'); 

// Task Handler
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText = '') return;

    // Task Element
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `
     <input type="checkbox" class="completeCheck" />
     <span class="taskText">${taskText}</span>
     <button class"editBtn">Edit</button>
     <button class"deleteBtn">Delete</button>
    `;

    taskList.appendChild(taskDiv)
    taskInput.value = ' ';
})

// CheckBoxes & Buttons

// Toggle Complete

// Delete Task