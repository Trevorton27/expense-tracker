let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");
let fired = false;
let firstExpense = null;
let secondExpense = null;

document.getElementById("submitButton").addEventListener("click", createNewItem);


function createNewItem(e) {
    e.preventDefault();
    populateTable();
   

    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
    document.getElementById("howMuch").value = "";
    activateDelete();
}
function getFirstExpense(expenseAmount) {
    firstExpense === null ? firstExpense = expenseAmount : firstExpense += expenseAmount;
    fired = true;
}

function getSecondExpense(expenseAmount) {
   secondExpense === null ? secondExpense = expenseAmount : secondExpense += expenseAmount;
    fired = false;
}

function totalExpenses( firstExpense, secondExpense) {
    let expense1 = parseFloat(firstExpense);
    let expense2 = parseFloat(secondExpense);

    expenseAmount = (expense1 + expense2 );
    return expenseAmount;

}

function removeRow(element) {
    element = document.querySelector('tr');
    element.parentNode.removeChild(element);
}
function activateDelete() {
    document.getElementById('delete-button').addEventListener('click', console.log('delete button was clicked'));
}
function populateTable() {
    let description = document.getElementById("what").value;
    let location = document.getElementById("where").value;
    let date = document.getElementById("when").value;
    let amount = document.getElementById("howMuch").value;
    let newItem = {
        id: Date.now(),
        item: description,
        time: date,
        location: location,
        amount: parseFloat(amount)
    };

    let expenseAmount = null;
    
    // creates new row to be injected into html table
    const tableRow = document.createElement('tr');
    renderArea.appendChild(tableRow);
    const deleteButton = document.createElement('BUTTON');
    const deleteButtonText = document.createTextNode('X');
    // creates new table cells top to bottom = right to left in table
    const tableCell1 = document.createElement('td');
    tableRow.appendChild(tableCell1);
    const tableCell2 = document.createElement('td');
    tableRow.appendChild(tableCell2);
    const tableCell3 = document.createElement('td');
    tableRow.appendChild(tableCell3);
    const tableCell4 = document.createElement('td');
    tableRow.appendChild(tableCell4);
    tableRow.appendChild(deleteButton);
    deleteButton.appendChild(deleteButtonText);
    deleteButton.setAttribute('id', 'delete-button');
    
    
    
    // calls values of newItem object as text values for new table row
    tableCell1.textContent = `${newItem.item}`;
    tableCell2.textContent = `${newItem.location}`;
    tableCell3.textContent = `${newItem.time}`;
    tableCell4.textContent = `${newItem.amount}`;
    console.log("New row id is ",newItem.id);

    
    expenseAmount = newItem.amount;// 

    if(fired) {
        getSecondExpense(expenseAmount);
        
    } else {
        getFirstExpense(expenseAmount);
        
    }
    
    totalExpenses(firstExpense, secondExpense);
    firstExpense && secondExpense !== null ? expenseAmount = (firstExpense + secondExpense) : expenseAmount = firstExpense;
    totalDisplay.textContent  = "$" + expenseAmount;
    firstExpense = expenseAmount;
    secondExpense = null;
    console.log("expense amount is ", expenseAmount);
}