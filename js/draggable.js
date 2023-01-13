    // // // // Make the DIV element draggable:
    dragElement(document.getElementsByClassName("lightWindow"));
    dragElement(document.getElementsByClassName("darkWindow"));
    dragElement(document.getElementsByClassName("showWindow"));
    
    function dragElement(elmnt) {
        $(elmnt).css("transition", "0s");
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onMouseDown = function() { alert("Hello World"); };
        console.log("empiezo para draggear");
        
        function dragMouseDown(e) {
            alert("hola");
            console.log("clicko y trackeo el cursor");
            $(elmnt).css("transition", "0s");
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
            console.log("marco la nueva posicion");
            $(elmnt).css("transition", "0s");
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
            console.log("hika");
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
            $(elmnt).css("transition", "0.5s");
        }
    }

