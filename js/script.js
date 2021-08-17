//on scroll Animation
new WOW().init();

// slider javascript
 window.addEventListener("DOMContentLoaded", function(e) {
    var stage = document.getElementById("img-slide");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
    }
   }, false);



   $(document).ready(function(){
     slideShow();
  
     function slideShow(){
  
     var current = $('#slider .show');
     var next = current.next().length ? 
     current.next() :
     current.siblings().first();
     current.hide().removeClass('show');
     next.fadeIn("slow").addClass('show');
    setTimeout(slideShow, 3000);
   };
    
  }); 