const container = document.querySelector('.container')

for(let k = 0; k < 16; k++){
    const rowDiv = document.createElement('div')
    rowDiv.setAttribute("style", "display: flex")
    for(let i = 0; i < 16; i++){
        const div = document.createElement('div')
        div.setAttribute("style", "height: 20px; width: 20px; border: 2px solid black")
        rowDiv.appendChild(div)
    }
    container.appendChild(rowDiv)
}

console.log("hello")