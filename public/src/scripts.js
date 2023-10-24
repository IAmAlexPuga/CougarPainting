//Event Listeners
window.addEventListener("resize", positionContent);

//global vars
let slideIndex = [1,1,1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4",
 "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11"];


function positionContent() {
    var header = document.getElementById("headerContent");
    var con = document.getElementById("content");
    var top = header.style.height + (window.innerHeight * .5) + 100;
    con.style.top = top; 
}

showSlides(1, 0);
showSlides(1, 1);


function plusSlides(n, slideId) {
  console.log("n, slideId: " + n + " " + slideId);
  console.log(slideIndex.toString());
  showSlides(slideIndex[slideId] += n, slideId);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }    
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


function showSlidesOnPage(n, no) {
  for(n; n <= no; n++) {
    showSlides(1,n);
  }
}