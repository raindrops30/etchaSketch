let containerDiv = document.querySelector('.container');
let userValue = document.getElementById('userValue');
let userSubmit = document.getElementById('userSubmit');
let resetButton = document.getElementById('resetBtn');

userSubmit.addEventListener('click', makeGrid);
resetButton.addEventListener('click', clearGrid);



function makeGrid(){
    
    let number = userValue.value;
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
    draw();
}

function draw() {
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener("mouseover", changeColor);
    }
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