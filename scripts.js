let size = 16
const container = document.querySelector('.container')
function colorThatOne(event) {
    event.target.style["background-color"] = "grey"
}

function gridLayout(size){
    container.replaceChildren();
    for(let k = 0; k < size; k++){
        const rowDiv = document.createElement('div')
        rowDiv.setAttribute("style", "display: flex; flex: 1")
        for(let i = 0; i < size; i++){
            const div = document.createElement('div')
            div.setAttribute("style", "border: 1px solid lightgrey; flex: 1")
            div.addEventListener("mouseover",colorThatOne)
            rowDiv.appendChild(div)
        }
        container.appendChild(rowDiv)
}
}

function getSize(){
    let newSize = -1
    while(!(newSize > 0 && newSize <= 100)){
        newSize = prompt("Resize the grid [Max = 100]", 16)
    }
    gridLayout(newSize)
}

const resizeButton = document.querySelector('.resize')
resizeButton.addEventListener("click", getSize)


gridLayout(size)
