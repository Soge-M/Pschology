let arc = document.querySelectorAll('a');
var cursordown = false;
var cursorypos = 0;
var cursorxpos = 0;
$('.popup__calendar').mousedown(function(e){
    setTimeout(() => arc.forEach((el)=>el.style.pointerEvents = "none"),200);
    cursordown = true; 
    cursorxpos = $(this).scrollLeft() + e.clientX; 
    cursorypos = $(this).scrollTop() +e.clientY;
}).mousemove(function(e){
    if(!cursordown) return;
    try { $(this).scrollLeft(cursorxpos - e.clientX); } catch(e) { }
    try { $(this).scrollTop(cursorypos - e.clientY); } catch(e) { }
}).mouseup(end = function(e){
    arc.forEach((el)=>{
        el.style.pointerEvents = "auto";
    });
    cursordown = false;
}).mouseleave(end);

