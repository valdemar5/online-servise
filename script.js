Jdocument.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    
    if (taskName) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskName;
        document.getElementById('tasks').appendChild(taskItem);
        document.getElementById('task-name').value = ''; // Clear input field
    }
});
