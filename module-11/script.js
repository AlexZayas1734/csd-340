let toDos = [];

function addToDo() {
    const input = document.getElementById('todoInput');
    const todo = input.value.trim();
    if (todo) {
        toDos.push(todo);
        alert('Added: ' + todo);
        input.value = ''; // Important to Clear the input
    } else {
        alert('Please enter a task!');
    }
}

function deleteLastToDo() {
    if (toDos.length > 0) {
        toDos.pop();
        alert('Last entry deleted.');
    } else {
        alert('No more tasks to delete!');
    }
}

function displayToDos() {
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // Making sure list is empty first
    toDos.forEach((todo, index) => {
        list.innerHTML += (index + 1) + '. ' + todo + '<br>';
    });
}
