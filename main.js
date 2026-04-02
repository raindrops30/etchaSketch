let containerDiv = document.querySelector('.container');
let resetButton = document.getElementById('resetBtn');

resetButton.addEventListener('click', clearGrid);

let number = 30;

for(let i = 0; i < number; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    containerDiv.appendChild(row);
    for(let k = 0; k < number; k++) {
        let column = document.createElement('div');
        column.classList.add('column')
        row.appendChild(column);
    }
}

let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
        }


function changeColor(){
    this.style.backgroundColor = '#2e2b2b';
}

function clearGrid(){
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = '';
        }
}   