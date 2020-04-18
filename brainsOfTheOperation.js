let renderArea = document.getElementById("main-table");
const totalDisplay = document.getElementById("total-display");

document.getElementById("submitButton").addEventListener("click", createNewItem);

function createNewItem(e) {
    e.preventDefault();
    populateTable();
    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
    document.getElementById("howMuch").value = "";
    return;
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
        amount: amount
    };
    let totalValue = null;
    
    // creates new row to be injected into html table
    const tableRow = document.createElement('tr');
    renderArea.appendChild(tableRow);

    // creates new table cells top to bottom = right to left in table
    const tableCell1 = document.createElement('td');
    tableRow.appendChild(tableCell1);
    const tableCell2 = document.createElement('td');
    tableRow.appendChild(tableCell2);
    const tableCell3 = document.createElement('td');
    tableRow.appendChild(tableCell3);
    const tableCell4 = document.createElement('td');
    tableRow.appendChild(tableCell4);
    
    // calls values of newItem object as text values for new table row
    tableCell1.textContent = `${newItem.item}`;
    tableCell2.textContent = `${newItem.location}`;
    tableCell3.textContent = `${newItem.time}`;
    tableCell4.textContent = `${newItem.amount}`;
    console.log("New row id is ",newItem.id);
    
    totalValue === null ? totalValue = newItem.amount : totalValue += newItem.amount;
    totalDisplay.textContent = "$" + totalValue;
    totalValue += totalDisplay.value + totalValue;
    console.log("total value is ", totalValue.value);
}



