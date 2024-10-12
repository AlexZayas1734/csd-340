const faveBooks = [
    "The Godfather",
    "48 Laws of Power",
    "The Gifts of Imperfection",
    "The Great Gatsby",
    "1984",
    "Romeo & Juliet",
    "A Game of Thrones",
    "Harry Potter",
    "The Art of War",
    "50th Law"
];

//Numbered li elements do not come from js. Styling (CSS) must be used to get the numbers we need in desc order.  

function displayBooksAsc() {
    const list = document.getElementById('bookList');
    list.classList.remove('reversed'); // Make sure the reversed styling is not applied here
    list.innerHTML = '';
    faveBooks.forEach((book) => {
        list.innerHTML += `<li>${book}</li>`;
    });
}

function displayBooksDesc() {
    const list = document.getElementById('bookList');
    list.classList.add('reversed'); // Add the reversed class for styling overide
    list.innerHTML = '';
    for (let i = faveBooks.length - 1; i >= 0; i--) {
        list.innerHTML += `<li>${faveBooks[i]}</li>`;
    }
}

