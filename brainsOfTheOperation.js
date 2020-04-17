
let renderArea = document.getElementById("main-table");

document.getElementById("submitButton").addEventListener("click", createNewItem);


function createNewItem(e) {
    e.preventDefault();
    populateTable();
    
 
    console.log("create new item done ran");
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

  
   const newRowContent = 
   `<tr> 
    <td>${newItem.item}</td>
    <td>${newItem.location}</td>
    <td>${newItem.time}</td>
    <td>${newItem.amount}</td>
    </tr>`;
      
      console.log("populateTable done ran");
      console.log("newRow = ", newRowContent );
    
   /* let newRow = document.body.createElement(`${newRowContent}`);*/
    
    renderArea.innerHTML += newRowContent;
}

