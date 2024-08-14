const setup = () => {
    setGrid(16, 16)
    let newGridButton = document.getElementById("newGrid")
    newGridButton.addEventListener("click", newGrid)
}

const setGrid = (x, y) => {
    let cont = document.getElementById("container")
    while(cont.hasChildNodes()){
        cont.removeChild(cont.lastChild)
    }

    for(let j= 0; j < y; j++){
        let divRow = document.createElement("div")
        divRow.classList.add("row")
        cont.appendChild(divRow)
        for(let i = 0; i < x; i++){
            let div = document.createElement("div")
            div.classList.add("squares")
            div.addEventListener("mouseover", () => {changeBackground(div);})
            div.addEventListener("click", () => {changeBackgroundClick(div)})
            divRow.appendChild(div)
        }
    }

}

const changeBackground = (div) => {
    div.style.backgroundColor = "red";
}

const changeBackgroundClick = (div) => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

const newGrid = () => {
    let x = null;;
    let y = null;
    while((x > 101 || x == null) && (y > 101 || x == null)){
        let gridInput = prompt("Give the x and y axis like this: '5, 5'")
        let parsedInput = gridInput.split(",")
        x = parsedInput[0]
        y = parsedInput[1]
    }
    setGrid(x,y)
}
window.addEventListener("load", setup);