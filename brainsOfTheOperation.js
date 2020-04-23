let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");
let fired = false;
let firstExpense = null;
let secondExpense = null;
let expenseAmount = null;
const tableValues = [];

let description = document.getElementById("what").value;
let place = document.getElementById("where").value;
let date = document.getElementById("when").value;
let amount = document.getElementById("howMuch").value;
let newItem = {
    id: tableValues.length > 0 ? tableValues[tableValues.length -1].id + 1 : 1,
    item: description,
    time: date,
    place: place,
    total: parseFloat(amount)
};


expenseAmount = newItem.total;

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

function subtractExpense() {
    //select for tableRow by id here, subtract purchase amount from total in display box and delete row on click
    return console.log('subtractExpense fired');
}


function activateDelete() {
    document.getElementById('delete-button').addEventListener('click', deleteRow);
}
function deleteRow() {
    console.log("deleteRow fired");
    let row = document.getElementById('table-row');
    row.parentNode.removeChild(row);
    

}

function populateTable() {
  
    //expenseAmount = newItem.total;//
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
    tableRow.setAttribute('id', 'table-row');
    
    
    
    // calls values of newItem object as text values for new table row
    tableCell1.textContent = `${newItem.item}`;
    tableCell2.textContent = `${newItem.place}`;
    tableCell3.textContent = `${newItem.time}`;
    tableCell4.textContent = `${newItem.total}`;
    console.log("New row id is ",newItem.id);

    
 

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
