import { DateTime } from 'luxon';
import Books from '../modules/books.js';
import toggleWindow from '../modules/toggle.js';

const bookObj = new Books();
const formElement = document.getElementById('formElement');
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleElement = document.getElementById('title');
  const authorElement = document.getElementById('author');
  bookObj.saveBook(titleElement.value, authorElement.value);
  bookObj.populateData();
});

window.onload = () => {
  bookObj.populateData();
};

toggleWindow();

const date = document.querySelector('.date');

setInterval(() => {
  const dateTimeParsing1 = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  date.innerHTML = dateTimeParsing1;
}, 1000);
