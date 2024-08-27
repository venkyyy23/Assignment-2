const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = task;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', deleteTask);
        taskListItem.appendChild(deleteBtn);
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}

function deleteTask(event) {
    const taskListItem = event.target.parentNode;
    taskList.removeChild(taskListItem);
}