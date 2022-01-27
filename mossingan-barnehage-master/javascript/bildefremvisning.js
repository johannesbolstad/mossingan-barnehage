
var bilde_nr = 1

visbilde(bilde_nr)



function nesteBilde(b) {
  visbilde(bilde_nr += b)

}

function visbilde(b) {
  let bilder = document.getElementsByClassName('dyr-fremvisning')
  if (b > bilder.length){ bilde_nr = 1}
  if (b < 1){bilde_nr = bilder.length}
  for (i = 0; i < bilder.length; i++){bilder[i].style.display = "none"}
  bilder[bilde_nr-1].style.display = "block";
}
