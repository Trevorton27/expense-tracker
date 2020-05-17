let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");
const tableValues = JSON.parse(localStorage.getItem('tableValues')) || [];
const description = document.getElementById("what");
const place = document.getElementById("where");
const date = document.getElementById("when");
const amount = document.getElementById("howMuch");


// tableValues.length > 0 ? tableValues.length + 1 : 1;

// tableValues.forEach((id) => {
//    let ID = id.id;
//    return ID;
// }); 


 
window.addEventListener('load', (e) => {
    e.preventDefault();
    
    tableValues.forEach((savedExpense) => {

        console.log('saved expense = ', savedExpense);
        renderTableRow(savedExpense);
    });
});

//1. create an item object
document
    .getElementById("submitButton")
    .addEventListener("click", () => {

 
        const newItem = {
            id: tableValues.length > 0 ? tableValues[tableValues.length -1].id + 1 : 1,
            item: description.value,
            time: date.value,
            location: place.value,
            total: amount.value
        };

        renderTableRow(newItem);
        pushToArray(newItem);
        console.log('tablevalues array ', tableValues);
        pushToLocalStorage(newItem);
        totalExpenses(tableValues);
        clearInputs();
        focusOnWhatField();
    });

//2. store to local array
function pushToArray(newItem) {
    tableValues.push(newItem);
};
//3. store array to local storage
function pushToLocalStorage() {
    localStorage.setItem('tableValues', JSON.stringify(tableValues));
};
// 4. render table
function renderTableRow(expense) {
     const tableId = expense.id;
    // tableValues.length > 0 ? tableValues[tableValues.length -1].id + 1 : 1 || tableValues.forEach((expense) => {
    // //     console.log('expense id ', expense.id);
    //     return expense.id;
    // });
    // creates new row to be injected into html table
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id', tableId);
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
    deleteButton.setAttribute('class', 'delete-button');
    deleteButton.addEventListener('click', deleteRow);

    tableCell1.textContent = expense.item;
    tableCell2.textContent = expense.time;
    tableCell3.textContent = expense.location;
    tableCell4.textContent = expense.total;

    totalExpenses(tableValues);
};
// 5. adjust total expense display
function totalExpenses(tableValues) {
    let sum = 0;
    // console.log('This is the sum ', sum);
    // for(let i = 0; i < tableValues.length; i++)
    console.log('current sum is ', sum);
    tableValues.forEach(({ total }) => {
        console.log('total for most recent expense is ', total);
        sum += parseFloat(total);
        totalDisplay.textContent = "$" + sum;
    });
};
// 6. Delete Table Row
function deleteRow(e) {
    e.preventDefault();
    let rowId = e.target.parentNode.id;
    for (let i = 0; i < tableValues.length; i++) {
        if (tableValues[i].id === Number(rowId)) {

            tableValues.splice(i, 1);
            targetRow = document.getElementById(rowId);
            targetRow.parentNode.removeChild(targetRow);
            localStorage.setItem('tableValues', JSON.stringify(tableValues));
            totalExpenses(tableValues);
            if (tableValues.length === 0) totalDisplay.textContent = "$" + 0;
        }
    }
};

function clearInputs() {
    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
    document.getElementById("howMuch").value = "";
};

function focusOnWhatField() {
    document.getElementById("what").focus();
};

