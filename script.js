let renderArea = document.getElementById('main-table');
const totalDisplay = document.getElementById('total-display');
const description = document.getElementById('what');
const place = document.getElementById('where');
const date = document.getElementById('when');
const amount = document.getElementById('howMuch');
const expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];

window.addEventListener('load', (e) => {
  e.preventDefault();

  expenseArray.forEach((savedExpense) => {
    renderTableRow(savedExpense);
  });
});

document.getElementById('submitButton').addEventListener('click', () => {
  if (!description.value || !amount.value || !date.value || !place.value) {
    alert('Please fill out all input fields before submitting. ');
    return;
  }

  const newItem = {
    id: Date.now(),
    item: description.value,
    time: date.value,
    location: place.value,
    total: amount.value
  };

  renderTableRow(newItem);
  expenseArray.push(newItem);
  pushToLocalStorage(newItem);
  totalExpenses();
  document.getElementById('form').reset();
});

function pushToLocalStorage() {
  localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
}

function renderTableRow(expense) {
  const newTableRow = document.createElement('tr');
  document.getElementById('main-table').appendChild(newTableRow);

  const itemCell = createCell(expense.item);
  newTableRow.appendChild(itemCell);

  const locationCell = createCell(expense.location);
  newTableRow.appendChild(locationCell);

  const dateCell = createCell(expense.time);
  newTableRow.appendChild(dateCell);

  const amountCell = createCell('$' + expense.total);
  newTableRow.appendChild(amountCell);

  const deleteCell = document.createElement('td');
  const deleteButton = createDeleteButton(expense);
  newTableRow.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton);
}

function createCell(expense) {
  const dataCell = document.createElement('td');
  dataCell.textContent = expense;
  return dataCell;
}

function createDeleteButton(expense) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteExpense(deleteButton, expense.id);
  });
  return deleteButton;
}

function totalExpenses() {
  let sum = 0;

  expenseArray.forEach(({ total }) => {
    sum += parseFloat(total);
    totalDisplay.textContent = '$' + sum;
  });
}

function deleteRow(e) {
  e.preventDefault();
  let rowId = e.target.parentNode.id;
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === Number(rowId)) {
      expenseArray.splice(i, 1);
      targetRow = document.getElementById(rowId);
      targetRow.parentNode.removeChild(targetRow);
      localStorage.setItem('tableValues', JSON.stringify(expenseArray));
      totalExpenses();
      if (expenseArray.length === 0) totalDisplay.textContent = '$' + 0;
    }
  }
}

const deleteExpense = (deleteButton, id) => {
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++) {
    if (expenseArray[i].id === id) {
      expenseArray.splice(i, 1);
      pushToLocalStorage(expenseArray);
      totalExpenses();
    }
  }
};
