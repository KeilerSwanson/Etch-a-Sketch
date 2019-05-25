

var gridContainer = document.querySelector("#grid-container");

function makeGrid(size = 16) {
    let grid = document.createElement("table");
    grid.setAttribute("class", "grid");
    for (i = 0; i <= size; i++) {
        let row = document.createElement("tr");
        row.setAttribute("class", "row");
        for (j = 0; j <= size; j++) {
            let col = row.insertCell();
            col.setAttribute("class", "col");
        }
        grid.appendChild(row);  
    }
    gridContainer.appendChild(grid);
}

function changeColor(square, color) {
    square.setAttribute("style", `background: ${color};`);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16) + 1];
    }
    return color;
}

function getSize() {
    let answer = prompt("Enter any number between 8 and 100 to set your grid size.");
    let size = parseInt(answer, 10);
    if ((size < 8) || (size > 100) || (isNaN(size))) {
        alert("Sorry, that isn't a valid value.  Click 'New Grid' and try again.");
        return 16;
    }
    return size;
}

function currentColor() {
    if (document.getElementById("black").selected) {
        return 'black';
    }
    else {
        return getRandomColor();
    }
}

document.addEventListener('mouseover', function (e) {
    let target = event.target;
    if (target.className == 'col') {
        changeColor(target, currentColor());
   }
})

let shakeBtn = document.querySelector(".shake");
shakeBtn.addEventListener('click', function() {
    let cols = document.getElementsByClassName("col")
    for (i = 0; i <= cols.length; i++) {
        let col = cols[i];
    col.setAttribute("style", "background: transparent;");
    }
});

newGridBtn = document.querySelector(".new-grid");
newGridBtn.addEventListener('click', function() {
    let grid = document.querySelector(".grid");
    grid.remove();
    makeGrid(getSize());
})

window.onload(makeGrid());













