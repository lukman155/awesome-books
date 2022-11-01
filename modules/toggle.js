const listSection = document.querySelector('#list');
const formSection = document.querySelector('#form-section');
const contactSection = document.querySelector('#contact-section');
const listBtn = document.querySelector('#menu-list');
const addFormBtn = document.querySelector('#menu-addnew');
const contactBtn = document.querySelector('#menu-contact');

const toggleWindow = () => {
  listBtn.addEventListener('click', () => {
    formSection.classList.add('hide');
    contactSection.classList.add('hide');
    listSection.classList.remove('hide');
    listBtn.classList.add('active');
    addFormBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  addFormBtn.addEventListener('click', () => {
    formSection.classList.remove('hide');
    contactSection.classList.add('hide');
    listSection.classList.add('hide');
    listBtn.classList.remove('active');
    addFormBtn.classList.add('active');
    contactBtn.classList.remove('active');
  });

  contactBtn.addEventListener('click', () => {
    formSection.classList.add('hide');
    contactSection.classList.remove('hide');
    listSection.classList.add('hide');
    listBtn.classList.remove('active');
    addFormBtn.classList.remove('active');
    contactBtn.classList.add('active');
  });
};
export default toggleWindow;