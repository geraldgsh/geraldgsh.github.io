// eslint-disable-next-line prefer-const
let library = [];
function Book(title, numPages, author, genre, year, read) {
  this.title = title;
  this.numPages = numPages;
  this.author = author;
  this.genre = genre;
  this.year = year;
  this.read = read;
}

Book.prototype = {
  constructor: Book,
  updateRead() {
    if (this.read === 'Read') {
      this.read = 'Not-Read';
    } else {
      this.read = 'Read';
    }
  },
};
const table = document.getElementById('renderTable');
const entryTable = document.getElementById('lib_entry');
const render = () => {
  entryTable.innerHTML = '';
  library.forEach(
    (book, index) => {
      const row = entryTable.insertRow(0);
      row.setAttribute('data-index', '${index}');
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      const cell7 = row.insertCell(6);
      cell1.innerHTML = book.title;
      cell2.innerHTML = book.numPages;
      cell3.innerHTML = book.author;
      cell4.innerHTML = book.genre;
      cell5.innerHTML = book.year;
      cell6.innerHTML = '<button class='btn btn-primary'>${book.read}</button>';
      cell6.id = 'toggle';
      cell7.innerHTML = '<button class='btn btn-danger'>Delete</button>';
      cell7.id = 'remove';  
    }
  );

  const allToggle = document.querySelectorAll('#toggle');
  for (const toggles of allToggle) {
    toggles.addEventListener('click', toggle);
  }

  const allremoveButton = document.querySelectorAll('#remove');
  for (const button of allremoveButton) {
    button.addEventListener('click', remove);
  }
}
  
function toggle(e) {
  library[this.parentNode.dataset.index].updateRead();
  updateLocalStorage(library);
  if (library[this.parentNode.dataset.index].read == 'Read') {
    e.target.classList.remove('Not-Read');
    e.target.textContent = 'Read';
  } else {
    e.target.classList.add('Not-Read');
    e.target.textContent = 'Not-Read';
  }
}

function remove() {
  library.splice(Number(this.parentNode.dataset.index), 1);
  updateLocalStorage(library);
  render();
}

function updateLocalStorage() {
  window.localStorage.setItem('library', JSON.stringify(library));
}

const addBookToLibrary = (ev) => {
  ev.preventDefault();
  let titleVal = document.getElementById('title').value;
  let pagesVal = document.getElementById('numPages').value;
  let authorVal = document.getElementById('author').value;
  let genreVal = document.getElementById('genre').value;
  let yearVal = document.getElementById('year').value;
  let readVal = document.getElementById('read').value;
  let newBook = new Book(titleVal, pagesVal, authorVal, genreVal, yearVal, readVal);
  console.warn('added' , {library} );
  library.push(newBook);
  window.localStorage.setItem('library', JSON.stringify(library));
  render();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addBookToLibrary);
});