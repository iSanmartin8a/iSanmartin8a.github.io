// Make the DIV element draggable:
dragElement(document.getElementById("newWindow"));

function dragElement(elmnt) {
    elmnt.style.transition = "0s";
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "Header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
} else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    elmnt.style.transition = "0s";
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    elmnt.style.transition = "0s";
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.transition = "0.5s";
}
}

function showSettings() {
    var button = document.getElementById("fondoNegro");
    button.style.opacity = 0;
    
    var window = document.getElementById("newWindow");
    window.style.opacity = 1;
    window.style.height = "10rem";
    window.style.width = "10rem";
}

function closeSettings() {
    var button = document.getElementById("fondoNegro");
    button.style.opacity = 1;
    
    var window = document.getElementById("newWindow");
    window.style.height = 0;
    window.style.width = 0;
    window.style.opacity = 0;

    setTimeout(setInitials(window), 1000);
}

function setInitials(elemento){
    elemento.style.right = "4rem";
    elemento.style.top = "4rem";
}