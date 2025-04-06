// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Add event listener for enter key to add task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Function to add a task
function addTask() {
    try {
        const taskText = taskInput.value.trim();

        // Throw exception if the task is empty
        if (taskText === "") {
            throw new Error("Task cannot be empty.");
        }

        const li = document.createElement('li');

        // Create complete button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn');
        completeBtn.onclick = () => toggleComplete(li);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => removeTask(li);

        // Append buttons and task text to the list item
        li.textContent = taskText;
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        // Add the task item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } catch (error) {
        // Handle exception by showing an alert
        alert(error.message);
    }
}

// Function to remove a task
function removeTask(taskElement) {
    try {
        if (!taskElement) {
            throw new Error("Task element not found.");
        }
        taskList.removeChild(taskElement);
    } catch (error) {
        alert(error.message);
    }
}

// Function to toggle task completion
function toggleComplete(taskElement) {
    try {
        if (!taskElement) {
            throw new Error("Task element not found.");
        }
        taskElement.classList.toggle('completed');
    } catch (error) {
        alert(error.message);
    }
}
