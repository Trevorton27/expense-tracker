
let renderArea = document.getElementById("main-table");

document.getElementById("submitButton").addEventListener("click", createNewItem);


function createNewItem(e) {
    e.preventDefault();
    populateTable();
    document.getElementsByClassName("field").reset();
 
    console.log("create new item done ran");
    return;
}

function populateTable() {
    let what = document.getElementById("what").value;
    let where = document.getElementById("where").value;
    let when = document.getElementById("when").value;
    let howMuch = document.getElementById("howMuch").value;
    let newItem = {
        id: Date.now(),
        item: what,
        time: when,
        location: where,
        amount: howMuch
    };

    let newTableRow =
    `
    <tr>
    <td>${newItem.item}</td>
    <td>${newItem.location}</td>
    <td>${newItem.time}</td>
    <td>${newItem.amount}</td>
    </tr>`;
      
      console.log("populateTable done ran");
 
    renderArea.innerHTML += newTableRow;
}

