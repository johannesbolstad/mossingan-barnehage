
//Priser hentet fra Levanger Kommune
//https://www.levanger.kommune.no/Tjenester-a-a/Skatter-og-avgifter/Offentlige-avgifter/Barnehage/?fbclid=IwAR2a81zwv9BZoR3qasEe78D4APJatcxrShugnMCyDUlQHeSEbQJfzUpAUvg
function kalkulerfunksjonenmin(){
  let p = document.getElementById('prosent').value
  let m = document.getElementById('mnd').value
  let b = document.getElementById('antall_barn').value
  var sum = Math.round((p*(1+0.7+(b-2)*0.5))*m)
  document.getElementById("pris").value = "Totalpris for perioden: "+ sum + " kr"
}
function kalkuler(){
  let p = document.getElementById('prosent').value
  let m = document.getElementById('mnd').value
  let b = document.getElementById('antall_barn').value
  if(p != "Hvor mange prosent?" && m !="Antall måneder?" && b != "Antall barn?"){
    kalkulerfunksjonenmin()
  }
}
