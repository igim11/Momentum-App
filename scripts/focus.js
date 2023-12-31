let focusItem = JSON.parse(localStorage.getItem('focusItem')) || [];

function displayInput() {
  let newFocus = document.getElementById('focusInput');
  let focusHeader = document.getElementById('focus-header');
  
  for (let i = 0; i < focusItem.length; i++) {
    if (focusItem[i].completed === false) {
      newFocus.style.display = 'none';
      focusHeader.innerHTML = 'TODAY';
    } else {
      newFocus.style.display = 'block';
      focusHeader.innerHTML = 'What is your main focus for today?';
    }
  };
};

displayInput();

function MainFocus(description, completed) {
  this.description = description;
  this.completed = completed || false;
}

function buildFocus(mainFocus, index) {
  if (mainFocus.completed) {
    return null;
  }

  let focusShell = document.createElement('div');
  focusShell.className = 'focusShell';

  let focusText = document.createElement('span');
  focusText.innerHTML = mainFocus.description;
  focusText.id = index;

  focusShell.appendChild(focusText);

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = index;
  checkbox.classList.add('focusCheckbox');

  let focusTrashBinButton = document.createElement('span');
  focusTrashBinButton.id = 'focusTrashBinButton';
  focusTrashBinButton.classList.add('focus-trash-bin');

  let focusTrashBinIcon = document.createElement('i');
  focusTrashBinIcon.classList.add('fas', 'fa-trash');

  focusTrashBinButton.appendChild(focusTrashBinIcon);

  focusTrashBinIcon.addEventListener('click', function() {
    checkbox.classList.add('completeCheckbox');
    focusText.classList.add('completeText');
    mainFocus.completed = true;
    localStorage.setItem('focusItem', JSON.stringify(focusItem));
    displayFocus();
    displayInput();
  })

  checkbox.addEventListener('click', function() {
    if (checkbox.checked === true) {
      checkbox.classList.add('completeCheckbox');
      focusText.classList.add('completeText');
      mainFocus.completed = true;
    } else {
      checkbox.classList.remove('completeCheckbox');
      focusText.classList.remove('completeText');
      mainFocus.completed = false;
    }

    localStorage.setItem('focusItem', JSON.stringify(focusItem));
  })

  focusShell.appendChild(checkbox);
  focusShell.appendChild(focusTrashBinButton);

  focusShell.addEventListener('mouseenter', function() {
    focusTrashBinButton.classList.add('hover');
    checkbox.classList.add('hover');
  })

  focusShell.addEventListener('mouseleave', function() {
    focusTrashBinButton.classList.remove('hover');
    checkbox.classList.remove('hover');
  })

  return focusShell;
}

function buildFocusItem(focusItem) {
  return focusItem.map(buildFocus);
}

function displayFocus() {
  let focusContainer = document.getElementById('focus-container');
  focusContainer.innerHTML = '';

  let item = buildFocusItem(focusItem);

  function append(item) {
    if (item !== null) {
      focusContainer.appendChild(item);
    }
  }

  item.forEach(append);
}

let addFocus = document.getElementById('focusInput');
addFocus.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    let newFocus = document.getElementById('focusInput');
    let newFocusItem = new MainFocus(newFocus.value);
    focusItem.push(newFocusItem);
    localStorage.setItem('focusItem', JSON.stringify(focusItem));
    newFocus.value = '';
    displayInput();
    displayFocus();
  }
});

displayFocus();