 function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}
// функция кнопки
function myFunction2() {
    var y = document.getElementById("snackbar");
    y.className = "show";
    setTimeout(function(){y.classList.toggle("show","");
        
    }, 3000);  

} 




    var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

document.onclick = function(dimavent) {
   // console.log(event.target.tagName);
    if (dimavent.target.tagName == "IMG"){
        dimavent.target.classList.add ('bordered');
    }      
}






