// Importerer header til alle stedene det er laget en .vår_header class
document.querySelector('.vår_header').innerHTML = '<header>'+
    '<a class="headerElement" href="om-oss.html"><h1>Om oss</h1></a>'+
    '<a class="headerElement" href="planer.html"><h1>Planer</h1></a>'+
  '<div class="bildeElement">'+
    '<a href="hjem.html"><img id="headerLogo" src="img/logo/logo11.png" onmouseover="nyLogo()" onmouseout="tilbake()"></a>'+
  '</div>'+
    '<a class="headerElement" href="kontakt.html"><h1>Kontakt</h1></a>'+
    '<a class="headerElement" href="min-side.html"><h1>Min Side</h1></a>'+
  '<nav class="">'+
    '<ul>'+
      '<li><a href="om-oss.html"><h1>Om oss</h1></a></li>'+
      '<li><a href="planer.html"><h1>Planer</h1></a></li>'+
      '<li><a href="kontakt.html"><h1>Kontakt</h1></a></li>'+
      '<li><a href="min-side.html"><h1>Min side</h1></a></li>'+
    '</ul>'+
  '</nav>'+
  '<img src="img/icons/meny.svg" onclick="nylogo2(this)" id="meny-knapp" alt="">'+
'</header>'+
'<div class="headerdiv">'+
'</div>'

// Importerer boksene vi har våres til nettsiden der det er laget en div som heter .våre_bokser
document.querySelector('.våre_bokser').innerHTML = '<div class="box-container">'+
'<div class="container">'+
'<a class="box" href="aktivitet.html">'+
    '<div class="icon"><img class="bilde" src="img/icons/aktivitet.png"></div>'+
    '<div class="content">'+
      '<h1>Aktivitet</h1>'+
      '<p>Her i Mossingan Familiebarnehage har har vi flere ulike aktiviteter for ungene. Klikk her for å lese mer om de ulike aktivitetene.</p>'+
    '</div>'+
'</a>'+
'</div>'+
'<div class="container">'+
  '<a class="box" href="dyr.html">'+
    '<div class="icon"><img class="bilde" src="img/icons/ku.svg" alt="aktivitet"></div>'+
    '<div class="content">'+
      '<h1>Våre dyr</h1>'+
      '<p>Mossingan barnehage er en gårds og familiebarnehage, noe som betyr at du finner ulike dyr hos oss. Klikk her for å se bilder av alle dyrene vi har i barnehagen.</p>'+
    '</div>'+
  '</a>'+
'</div>'+
'<div class="container">'+
  '<a class="box" href="kontakt.html#her-finner-du-oss">'+
    '<div class="icon"><img class="bilde" src="img/icons/location.svg" alt="aktivitet"></div>'+
    '<div class="content">'+
      '<h1>Hvor finner du oss?</h1>'+
      '<p>Mossingan Familiebarnehage holder til i Mossingvegen 311, 7630 Åsen, Levanger. Klikk her for utvidet informasjon med kart for å finne frem.</p>'+
    '</div>'+
  '</a>'+
'</div>'+
'<div class="container">'+
  '<a class="box" href="om-oss.html#levanger">'+
    '<div class="icon"><img class="bilde" src="img/icons/priser.svg" alt="aktivitet"></div>'+
    '<div class="content">'+
      '<h1>Priser</h1>'+
      '<p>Vi gir søskenrabatt! Klikk her for å se våre priser for barnehageplass</p>'+
    '</div>'+
  '</a>'+
'</div>'+
'</div>'
//Ikonene er funnet her:
//1. Aktivitetikon laget selv.
//2. Ku ikon hentet fra: https://www.flaticon.com/free-icon/cow_235371#term=cow&page=1&position=34
//3. Location ikon er laget selv og konstruert ved bruk av photoshop
//4. Pris ikon hentet fra: https://www.flaticon.com/free-icon/discount_879757#term=price&page=1&position=1

//Importerer footer til alle steder det er laget en class som heter .vår_footer
document.querySelector('.vår_footer').innerHTML = '<footer>'+
'<a class="footerElement" href="kontakt.html#her-finner-du-oss">'+
  '<img src="img/icons/posisjon.svg" alt="posisjon logo">'+
  '<p>Mossingvegen 311, 7630 Åsen, Levanger</p>'+
'</a>'+
'<a class="footerElement" href="tel:+4799168506">'+
  '<img src="img/icons/telefon.svg" alt="telefon logo">'+
  '<p>+47 991 68 506</p>'+
'</a>'+
'<a class="footerElement" href="mailto:kontakt@mossingan.no">'+
  '<img src="img/icons/email.svg" alt="e-mail logo">'+
  '<p>kontakt@mossingan.no</p>'+
'</a>'+
'<div class="footerElement">'+
  '<img src="img/icons/klokke.svg" alt="åpningstider logo">'+
  '<p>Man-Fre (06:30 - 16:30)</p>'+
'</div>'+
'<a class="footerElement" href="planer.html#ukeplan">'+
  '<img src="img/icons/kalender.svg" alt="kalender logo">'+
  '<p id=date></p>'+
'</a>'+
'</footer>'

//Funksjonen som gjør at vi kan synligjøre navigasjonsbaren
const menuToggle = document.getElementById('meny-knapp')
const nav = document.querySelector('nav')
menuToggle.addEventListener('click', function (i){
    if (nav.className != 'aktiv') {nav.className = 'aktiv'}
    else {nav.className = 'hei'}
})

//Funksjon som genererer en dato string og skriver den ut i footeren
function dateDis() {
    var datoen = new Date()
    var thisDate = datoen.getDate()
    const months = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"]
    var thisYear = datoen.getFullYear()
    var date = document.getElementById('date')
    date.innerHTML = thisDate + ". " + months[datoen.getMonth()] + " " + thisYear
}
dateDis()

// Når vi hover over header logoen så endrer bildet seg til et bilde som er litt mørkere for å skap en effekt av at dette er en link
let logo = document.getElementById('headerLogo')
let mobil_logo = document.getElementById('id')

function nyLogo() {
  logo.src = 'img/logo/logo22.png'
}
function tilbake(){
  logo.src = 'img/logo/logo11.png'
}

//En funksjon som gjør at vi skifter bilde fra en meny-hamburger ikon til et kryss ikon.
function nylogo2(img){
  if (img.src.match(/kryss/)){
    img.src = "img/icons/meny.svg"
  }
  else {img.src = "img/icons/kryss.svg" }  //Kryss ikon er hentet fra https://www.flaticon.com/free-icon/close_151882#term=cross&page=1&position=4 men fargen er  endret
}
