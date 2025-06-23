const container = document.getElementById('container');
const reset = document.querySelector('.reset');
const NewGrid = document.querySelector('.NewGrid');

reset.addEventListener('click', () => {
    clearGrid();
    reset.makeRows(16);
    reset.makeColumns(16)
})

function clearGrid(){
  container.innerHTML='';
}

NewGrid.addEventListener('click', () => {
    const size = parseInt(prompt('Enter grid size (max 100):'),10);
    if(!isNaN(size) && size>0 && size<=100){
      makeRows(size);
      makeColumns(size);
    }
    else{
      alert('Invalid grid size');
    }
});


function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

function makeRows(rowNum) {
  for (let r = 0; r < rowNum; r++) {
    const row = document.createElement('div');
    row.className = 'gridRow';
    container.appendChild(row);
  }
}

function makeColumns(cellNum) {
  const rows = document.getElementsByClassName('gridRow');
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';

      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = randomColor();
      });

      rows[i].appendChild(cell);
    }
  }
}

function randomColor(){
  const hue = Math.floor(Math.random() *360);
  return `hsl(${hue},50%,50%)`;
}
defaultGrid();
