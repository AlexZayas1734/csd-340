let toDos = []; // Array to hold to-do items

function addToDo() {
    const input = document.getElementById('todoInput');
    if (input.value.trim() !== '') { // make sure input value is not empty
        toDos.push(input.value.trim()); // add input value to toDos Array
        input.value = ''; // Clear the input after adding
    }
}

function displayToDos() {
    const list = document.getElementById('todoList');
    list.innerHTML = ''; // Clear existing entries
    toDos.forEach((todo, index) => {
        const item = document.createElement('li'); // Create a new list item for each todo
        item.textContent = (index + 1) + '. ' + todo + ' ';

        const deleteButton = document.createElement('button'); // Create a delete button for each item
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() { deleteToDo(index); }; // Assign a function to delete this item

        item.appendChild(deleteButton); // Append the button to the list item
        list.appendChild(item); // Append the list item to the list
    });
}

function deleteToDo(index) {
    toDos.splice(index, 1); // Remove the item at the specified index
    displayToDos(); // display the list after the delete
}
