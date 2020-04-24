let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");
let fired = false;
let firstExpense = null;
let secondExpense = null;
let expenseAmount = null;
const tableValues = [];
let description = document.getElementById("what");
let place = document.getElementById("where");
let date = document.getElementById("when");
let amount = document.getElementById("howMuch");





document
    .getElementById("submitButton")
    .addEventListener("click", createNewItem);


function createNewItem(e) {
    e.preventDefault();

    let newItem = {
        id: tableValues.length > 0 ? tableValues[tableValues.length -1].id + 1 : 1,
        item: description.value,
        time: date.value,
        place: place.value,
        total: amount.value
    };
    expenseAmount = parseFloat(newItem.total);
    populateTable(newItem);
   
    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
    document.getElementById("howMuch").value = "";
 
    tableValues.push(newItem);
    console.log("expenseAmount is ", expenseAmount);
    console.log("tableValues ", tableValues);
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
    document.getElementById('delete-button').addEventListener('click', function() { deleteRow(tableValues[0].id); });
}

function deleteRow(id) {
        console.log("deleteRow fired");
        console.log("tableValues before loop is", tableValues)
        id = tableValues[i].id;
        for(let i = 0; i < tableValues.length; i ++) {
            if(tableValues[i].id == id) {
                tableValues.splice(i, 1);
            }
        }
        let row = document.getElementById('table-row');
        row.parentNode.removeChild(row);
        console.log("tableValues after loop is", tableValues)
     
    }; 


    



function populateTable(newItem) {
  
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
    
    let item = newItem.item;
    
    // calls values of newItem object as text values for new table row
    tableCell1.textContent = `${item}`;
    tableCell1.setAttribute('id', `${newItem.id}`);
    tableCell2.textContent = `${newItem.place}`;
    tableCell3.textContent = `${newItem.time}`;
    tableCell4.textContent = `${newItem.total}`;
    console.log("New row id is ",newItem.id);
    console.log("New row item is ",newItem.item);
    console.log("New row place is ",newItem.place);
    console.log("New row total is ",newItem.total);

    
 

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
    activateDelete();

}


