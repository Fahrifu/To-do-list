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
    if (target.classList.contains('editBtn')) {
        const taskTextSpan = taskDiv.querySelector('.taskText');

        if (target.textContent === 'Edit') {
            // Switch to edit Mode
            const input = document.createElement('input');
            input.type = 'text';
            input.value = taskTextSpan.textContent;
            input.className = 'editInput';

            taskDiv.replaceChild(input, taskTextSpan);
            target.textContent = 'Save';
        } else {
            // Save Edit
            const input = taskDiv.querySelector('.editInput');
            const newSpan = document.createElement('span');
            newSpan.className = 'taskText';
            newSpan.textContent = input.value;

            taskDiv.replaceChild(newSpan, input);
            target.textContent = 'Edit';
        }
    }
    });
    // save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task').forEach(taskDiv => {
            const textEl = taskDiv.querySelector('.taskText');
            const isCompleted = taskDiv.querySelector('.completeCheck').checked;
            if (textEl) {
                tasks.push({ text: textEl.textContent, completed: isCompleted});
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // load tasks from localStorage
    function loadTasks() {
        const saved = localStorage.getItem('tasks');
        if (!saved) return;

        const tasks = JSON.parse(saved);
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            taskDiv.innerHTML = `
            <input type="checkbox" class="completeCheck" ${task.completed ? 'checked' : ''} />
            <span class="taskText">${task.text}</span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
            `;

            if (task.completed) {
                taskDiv.querySelector('.taskText').classList.add('completed');
            }

            taskList.appendChild(taskDiv);
        });
    }

});

