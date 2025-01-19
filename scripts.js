const container = document.querySelector('.container')
function colorThatOne(event) {
    event.target.style["background-color"] = "blue"
}

for(let k = 0; k < 16; k++){
    const rowDiv = document.createElement('div')
    rowDiv.setAttribute("style", "display: flex")
    for(let i = 0; i < 16; i++){
        const div = document.createElement('div')
        div.setAttribute("style", "height: 20px; width: 20px; border: 2px solid black;")
        div.addEventListener("mouseover",colorThatOne)
        div.classList.add('el')
        rowDiv.appendChild(div)
    }
    container.appendChild(rowDiv)
}
