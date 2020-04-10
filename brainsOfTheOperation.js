const what = document.getElementById("what").value;
const where = document.getElementById("where").value;
const when = document.getElementById("when").value;
const howMuch = document.getElementById("howMuch").value;
const paymentType = document.getElementById("paymentType").value;
const submit = document.getElementById("submitButton").value;
let renderArea = document.getElementById("td");
const newItem = {
    id: Date.now(),
    item: what,
    time: when,
    location: where,
    amount: howMuch,
    payment: paymentType

};


submitButton.addEventListener("click", createNewItem);

function createNewItem() {
    renderArea.innerHTML = populateTable(what);
    console.log(renderArea);
}

function populateTable() {
    document.createElement("td");
  tr.appendChild(newItem.item);
    /*renderArea.appendChild(newItem.location);
    renderArea.appendChild(newItem.time);
    renderArea.appendChild(newItem.amount);
    renderArea.appendChild(newItem.payment);*/
}