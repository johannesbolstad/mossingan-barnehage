
const bakgrunn = document.getElementsByClassName("forsidebilde")[0];
window.addEventListener("scroll", function(scrolling){
  let forskyvning = window.pageYOffset
  bakgrunn.style.backgroundPositionY = -forskyvning*0.4 +"px"
})
