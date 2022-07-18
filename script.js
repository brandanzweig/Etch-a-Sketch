const sizeOfGrid = 16
const container = document.querySelector(".container");

const createGrid = (NumOfGridSq) => {
    for (let i = 0; i < NumOfGridSq; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row")

        for (let j = 0; j < NumOfGridSq; j++) {
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            row.appendChild(gridBox)
        }

    container.appendChild(row)
    }
}

createGrid(sizeOfGrid)