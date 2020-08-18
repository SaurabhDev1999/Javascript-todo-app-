const todoInputEl = document.querySelector('.todo__input');
const todoListEl = document.querySelector('.todo__list');
const todoItemEls = document.querySelectorAll('.todo__item');
const closeItemEl = document.querySelector('span');

function addListItem() {
  todoInputEl.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      const newListItem = createListItem(todoInputEl.value);
        
      todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
      todoInputEl.value = '';
    }
  });
}

function toggleDone() {
  todoListEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('todo__item')) {
      event.target.classList.toggle('done');
    }
  });
}
toggleDone();

function createListItem(text) {
  const newListElement = document.createElement('li');
  newListElement.setAttribute('class', 'todo__item');
  newListElement.textContent = text;
  return newListElement;
}

function closeItem() {
  closeItemEl.addEventListener('click', function() {
    todoItemEls.
  });
}
closeItem();
addListItem();
