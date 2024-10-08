// App State Variables
let tasks = [];

// Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    
    // Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    
    // Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
        return;
    }
    
    // Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline });
    
    // Clear form fields
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDeadline').value = '';
    
    render();
}

// Function to render tasks in the table
function render() {
    taskTable.innerHTML = `
        <tr>
            <th>Task Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Actions</th>
        </tr>
    ` + tasks.map((task, index) => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td>
                <button onclick="markTaskComplete(${index})">Complete</button>
                <button onclick="removeTask(${index})">Remove</button>
            </td>
        </tr>
    `).join('');
}

// Function to mark a task as complete
function markTaskComplete(index) {
    tasks[index].completed = true;
    render();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();