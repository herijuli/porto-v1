let bars = document.getElementById("bars");
let close = document.getElementById("close-bar");

bars.addEventListener('click',function(){
  document.getElementById("menu-slide").style.display="block";
  
})

close.addEventListener('click', function(){
  document.getElementById("menu-slide").style.display="none";
})
