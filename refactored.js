let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");
const tableValues = [];
let description = document.getElementById("what");
let place = document.getElementById("where");
let date = document.getElementById("when");
let amount = document.getElementById("howMuch");

//1. create an item object
let newItem = {
    id: tableValues.length > 0 ? tableValues[tableValues.length -1].id + 1 : 1,
    item: description.value,
    time: date.value,
    place: place.value,
    total: amount.value
};
document
    .getElementById("submitButton")
    .addEventListener("click", () => {renderTableRow(newItem)});
    //2. store to local array
function pushToArray(newItem) {
    tableValues.push(newItem);
    
 }; 
    //3. store array to local storage
function pushToLocalStorage() {
    localStorage.setItem('tableValues', JSON.stringify(tableValues));
};
   // 4. render table
function renderTableRow(newItem) {

    tableId = tableValues.length > 0 ? tableValues.length + 1 : 1;
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

    tableCell1.textContent = `${newItem.item}`;
    tableCell2.textContent = `${newItem.place}`;
    tableCell3.textContent = `${newItem.time}`;
    tableCell4.textContent = `${newItem.total}`;
    console.log('new item is ', newItem);
    console.log('new item total is ', newItem.total.value);

    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
    document.getElementById("howMuch").value = "";
    document.getElementById("what").focus();

    pushToArray(newItem);
    console.log('tablevalues array ', tableValues);

    pushToLocalStorage();

    totalExpenses(tableValues);
};
// 5. adjust total expense display
function totalExpenses(tableValues) {
        let sum = 0;
        tableValues.forEach((item) => {
            sum += item.total
        })
        console.log('sum = ', sum);
        totalDisplay.textContent  = "$" + sum;
};
// 6. Delete Table Row
function deleteRow(e) {
    e.preventDefault();
    let rowId = e.target.parentNode.id;
    for(let i = 0; i < tableValues.length; i++) {
        if(tableValues[i].id === Number(rowId)) {

            tableValues.splice(i, 1);
            targetRow = document.getElementById(rowId);
            targetRow.parentNode.removeChild(targetRow);
            localStorage.setItem('tableValues', JSON.stringify(tableValues));
        } 
    }

};