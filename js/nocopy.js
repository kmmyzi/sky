 function click() {
     return false;
 }

 function click1() {
     if (event.button == 2) {
         return false;
     }
 }

 function CtrlKeyDown() {
     if (event.ctrlKey) {
         return false;
     }
 }
 document.onkeydown = CtrlKeyDown;
 document.onselectstart = click;
 document.onmousedown = click1;
 document.oncontextmenu = function(event) {
     if (document.all)
         window.event.returnValue = false; // for IE
     else
         event.preventDefault();
 }