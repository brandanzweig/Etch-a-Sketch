const container = document.querySelector(".container");
const resetButton = document.querySelector("button");

const createGrid = (numOfGridSq) => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")

    for (let i = 0; i < numOfGridSq; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row")

        for (let j = 0; j < numOfGridSq; j++) {
            const widthAndHeight = 1000 / numOfGridSq;
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "black";
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener("click", () => {
    let userSize = Number(prompt("what dimensions do you want for the new grid?"))

        while (userSize > 100) {
        userSize = Number(prompt("Pick a number less than 100"))
        }
    
    const wrapper = document.querySelector(".wrapper")
    
    if (!wrapper) {
        createGrid(userSize)
    } else {
        wrapper.remove()
        createGrid(userSize) 
    }
})
