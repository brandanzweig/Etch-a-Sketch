let container = document.querySelector(".container");

function addDiv(numberOfDivsToCreate) {
    let gridSize = 16;

    // create grid squares & add to container
    while (gridSize > 0) {
        var newDiv = document.createElement('div'); 	
        container.appendChild(newDiv); 
        newDiv.classList.add('grid'); 
        newDiv.setAttribute = ("style", "height: 16px; width: 16px; border: 1px solid black;");             
        gridSize--; 
    }

    let gridCells = document.querySelectorAll('.grid'); 
}
