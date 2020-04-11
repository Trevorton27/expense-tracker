const what = document.getElementById("what").value;
const where = document.getElementById("where").value;
const when = document.getElementById("when").value;
const howMuch = document.getElementById("howMuch").value;
const paymentType = document.getElementById("paymentType");
const submit = document.getElementById("submitButton").value;
const newItem = {
    id: Date.now(),
    item: what,
    time: when,
    location: where,
    amount: howMuch,
    payment: paymentType
};

submitButton.addEventListener("click", createNewItem());

function createNewItem(event) {
   
    populateTable();
    let cat = newItem;
    console.log("cat is ",  cat);
}

function populateTable() {

    let renderArea = document.getElementById("main-table");
    renderArea.innerHTML = 
    `${newItem.id}
    <td>
    ${newItem.item}
    </td>
    <td>
    ${newItem.time}
    </td>
    <td>
    ${newItem.location}
    </td>
    <td>
    ${newItem.amount}
    </td>
    <td>
    ${newItem.payment}
    </td>
      `
}

