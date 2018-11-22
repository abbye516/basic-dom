const playingField = document.getElementById("playing-field")
console.log(playingField)

const down = document.getElementById("down")
console.log(down)

console.log(down.innerHTML)

down.innerHTML = "Down"
down.style.backgroundColor = "blue"

console.log(playingField.innerHTML)

const block = document.getElementById("block").style.backgroundColor = "yellow"

const moveRight = function () {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left += 15
    block.style.left = left + "px"
}
moveRight()
moveRight()

const header = document.createElement("h1")
header.innerHTML = "Worst Game Ever"
header.style.color = "red"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
//appendChild:inserts whatever we coded into the html element. In this case we append header into the body of the HTML


header.setAttribute("class", "my-header")

const newHeader = document.