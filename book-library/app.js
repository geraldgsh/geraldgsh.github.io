const library = [];
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

const entryTable = document.getElementById('lib_entry');
const render = () => {
  entryTable.innerHTML = '';
  library.forEach(
    (book, index) => {
      const row = entryTable.insertRow(0);
      row.setAttribute('data-index', index);
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
      cell6.innerHTML = `<button class='btn btn-primary'>${book.read}</button>`;
      cell6.id = 'toggle';
      cell7.innerHTML = "<button class='btn btn-danger'>Delete</button>";
      cell7.id = 'remove';
    },
  );


  function updateLocalStorage() {
    window.localStorage.setItem('library', JSON.stringify(library));
  }

  function toggle(e) {
    library[this.parentNode.dataset.index].updateRead();
    updateLocalStorage(library);
    if (library[this.parentNode.dataset.index].read === 'Read') {
      e.target.classList.remove('Not-Read');
      e.target.textContent = 'Read';
      // change object property to true
    } else {
      e.target.classList.add('Not-Read');
      e.target.textContent = 'Not-Read';
      // change object property to false
    }
  }

  function remove() {
    library.splice(Number(this.parentNode.dataset.index), 1);
    updateLocalStorage(library);
    render();
  }

  const allToggle = document.querySelectorAll('#toggle');
  allToggle.forEach((toggles) => {
    toggles.addEventListener('click', toggle);
  });
  // end of toggle
  const allremoveButton = document.querySelectorAll('#remove');
  allremoveButton.forEach((button) => {
    button.addEventListener('click', remove);
  });
};

const pushBook = (book) => {
  library.push(book);
  window.localStorage.setItem('library', JSON.stringify(library));
  render();
};

const addBookToLibrary = (ev) => {
  ev.preventDefault();
  const titleVal = document.getElementById('title').value;
  const pagesVal = document.getElementById('numPages').value;
  const authorVal = document.getElementById('author').value;
  const genreVal = document.getElementById('genre').value;
  const yearVal = document.getElementById('year').value;
  const readVal = document.getElementById('read').value;
  if (titleVal === '' || authorVal === '' || pagesVal === '' || yearVal === '') {
    // eslint-disable-next-line no-alert
    return alert('All fields need to be complete!');
  }

  const newBook = new Book(titleVal, pagesVal, authorVal, genreVal, yearVal, readVal);
  return pushBook(newBook);
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', addBookToLibrary);
});
