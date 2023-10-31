let contextMenu = document.getElementById("contextMenu");



document.body.addEventListener("contextmenu",newMenuFunc);
document.body.addEventListener("click",delContextMenu);

function newMenuFunc (event) {
  
contextMenu.style.display="block";
contextMenu.style.left= event.pageX
contextMenu.style.top=event.pageY

console.log(event.pageX,event.pageY);
console.log(event);
}
function delContextMenu (){
    contextMenu.style.display="none";

}