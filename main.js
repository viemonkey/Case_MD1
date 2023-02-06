let total;
const table = document.querySelector(" #expense-report ")

function start() {
    total = +document.getElementById("confirm").value;
    console.log(total)
}

function add() {

    let result1 = document.getElementById('confirm').value;
    let money = +document.getElementById('money').value;
    let typeOne = document.getElementById('type').value;
    if (typeOne === "collect") {
        total += money;
    } else {
        total -= money;
    }
    let result2 = document.getElementById('type').value;
    let result3 = document.getElementById('category').value;
    let result4 = document.getElementById('note').value;


    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${result1}</td>
    <td>${total}</td>
    <td>${result2}</td>
    <td>${result3}</td>
    <td>${result4}</td>
    <td>${new Date().toLocaleDateString()}</td>
  `;
    table.appendChild(row);
    let result5 = document.getElementById('btn').value;
    if (typeOne === 'pay') {
        if ('pay' > result5) {
            alert("qua han muc")
        }
    }
}




