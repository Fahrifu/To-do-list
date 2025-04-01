// DOM elements
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

// Task Handler
addBtn.addEventListener('click', () => {
    let taskText = taskInput.value.trim();
    if (taskText === '') return;

    // Task Element
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `
     <input type="checkbox" class="completeCheck" />
     <span class="taskText">${taskText}</span>
     <button class="editBtn">Edit</button>
     <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(taskDiv)
    taskInput.value = '';
})

// CheckBoxes & Buttons
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const taskDiv = target.closest('.task');

    // Toggle Complete
    if (target.classList.contains('completeCheck')) {
        const taskText = taskDiv.querySelector('.taskText');
        taskText.classList.toggle('completed');
    }

    // Delete Task
    if (target.classList.contains('deleteBtn')) {
        taskDiv.remove();
    }

    // Edit Task

    // Switch to edit Mode

    // Save Edit

    });
});

