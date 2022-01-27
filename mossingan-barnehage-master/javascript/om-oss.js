const blad = document.getElementById("blad")
const blad2 = document.getElementById("blad2")
const blad3 = document.getElementById("blad3")
const blad4 = document.getElementById("blad4")
var yKordinater = blad.getBoundingClientRect().top
var xKordinater = blad.getBoundingClientRect().left
var yKordinater2 = blad2.getBoundingClientRect().top
var xKordinater2 = blad2.getBoundingClientRect().left
var yKordinater3 = blad3.getBoundingClientRect().top
var xKordinater3 = blad3.getBoundingClientRect().left
var yKordinater4 = blad4.getBoundingClientRect().top
var xKordinater4 = blad4.getBoundingClientRect().left

window.addEventListener("scroll", function(scrolling){
  let forskyvning = window.pageYOffset
  blad.style.top = yKordinater+forskyvning*0.6+"px"
  blad2.style.top = yKordinater2+forskyvning*0.6+"px"
  blad3.style.top = yKordinater3+forskyvning*0.5+"px"
  blad4.style.top = yKordinater4+forskyvning*0.4+"px"
  blad.style.transform = "rotate("+-forskyvning/65 +"deg)"
  blad2.style.transform = "rotate("+forskyvning/40 +"deg)"
  blad3.style.transform = "rotate("+-forskyvning/40 +"deg)"
  blad4.style.transform = "rotate("+forskyvning/40 +"deg)"
})
