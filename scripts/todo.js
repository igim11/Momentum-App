// popup todo list
const toDoButton = document.getElementById('todo-button');
const toDoPopup = document.getElementById('todo-popup');

toDoButton.addEventListener('click', function() {
  if (toDoPopup.style.display === 'block') {
    toDoPopup.style.display = 'none';
  } else {
    toDoPopup.style.display = 'block';
  }

  displayToDos();
});

// clear all button
let clearAll = document.getElementById('clear-all');

clearAll.addEventListener('click', function() {
  toDoItems = [];
  displayToDos();
})

// building to do list items
let toDoItems = JSON.parse(localStorage.getItem('toDoItems')) || [];

function ToDo(description, completed) {
  this.description = description;
  this.completed = completed || false;
}

function buildToDo(toDo, index) {
  if (toDo.completed) {
    return null;
  }

  let toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell';

  let toDoText = document.createElement('span');
  toDoText.innerHTML = toDo.description;
  toDoText.id = index;

  toDoShell.appendChild(toDoText);

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = index;

  let trashBinButton = document.createElement('span');
  trashBinButton.id = 'trashBinButton';
  trashBinButton.classList.add('trash-bin');

  let trashBinIcon = document.createElement('i');
  trashBinIcon.classList.add('fas', 'fa-trash');

  trashBinButton.appendChild(trashBinIcon);

  trashBinButton.addEventListener('click', function() {
    checkbox.classList.add('completeCheckbox');
    toDoText.classList.add('completeText');
    toDo.completed = true;
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
    displayToDos();
  })

  checkbox.addEventListener('click', function() {
    if (checkbox.checked === true) {
      checkbox.classList.add('completeCheckbox');
      toDoText.classList.add('completeText');
      toDo.completed = true;
    } else {
      checkbox.classList.remove('completeCheckbox');
      toDoText.classList.remove('completeText');
      toDo.completed = false;
    }
    
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
  });

  toDoShell.appendChild(checkbox);
  toDoShell.appendChild(trashBinButton);
  return toDoShell;
}

function buildToDos(toDoItems) {
  return toDoItems.map(buildToDo);
}

function displayToDos() {
  let toDoContainer = document.getElementById('todo-list-wrapper');
  toDoContainer.innerHTML = '';

  let items = buildToDos(toDoItems);

  function append(item) {
    if (item !== null) {
      toDoContainer.appendChild(item);
    }
  }

  items.forEach(append);
}

let addToDo = document.getElementById('toDoInput');
addToDo.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    let newToDo = document.getElementById('toDoInput');
    let newToDoItem = new ToDo(newToDo.value);
    toDoItems.push(newToDoItem);
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
    newToDo.value = '';
    displayToDos();
  }
});

displayToDos();
