//Event Listeners
window.addEventListener("resize", positionContent)

function positionContent() {
    var header = document.getElementById("headerContent");
    var con = document.getElementById("content");
    var top = header.style.height + (window.innerHeight * .5) + 100;
    con.style.top = top; 
    console.log("screen resized.  contents top pos is:" + top.toString());
    console.log(window.innerHeight.toString());
    console.log(window.innerWidth.toString());
}