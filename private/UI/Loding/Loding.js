export function ExitLooding() {
    if (document.getElementById("containnerLoding")) {

        if (document.getElementById("peliculaLoding")) {
            var peliculaLoding = document.getElementById("peliculaLoding")
            peliculaLoding.className = "peliculaExit"
            peliculaLoding.remove()
        }
        var containnerLoding = document.getElementById("containnerLoding")
        containnerLoding.remove()     
    }


}

export function InitLooding(idContainner,timeduration,timeout,tamanho="grande",fundo=true) {
    var dimencao = 0
    if (tamanho == "grande") {dimencao = "170px"}
    if (tamanho == "medio") {dimencao = "100px"}
    if (tamanho == "pequeno") {dimencao = "50px"}
    if (document.getElementById("containnerLoding")) {
        if (document.getElementById("peliculaLoding")) {
        var peliculaLoding = document.getElementById("peliculaLoding")
        peliculaLoding.remove()
        }
        containnerLoding.remove()
        var containnerLoding = document.getElementById("containnerLoding")
    }
    var elContainner = document.getElementById(idContainner)
    // elContainner.style.opacity = "0.5"
    var margin_left = elContainner.offsetLeft
    var margin_top  = elContainner.offsetTop
    var innerWidth  = elContainner.offsetWidth
    var innerheight = elContainner.offsetHeight
    
    var pelicula  = document.createElement("div")
    pelicula.id = "peliculaLoding"
    pelicula.style.position = "absolute"
    pelicula.style.zIndex = "50"
    pelicula.style.width = `${innerWidth}px`
    pelicula.style.height = `${innerheight}px`
    pelicula.style.top = `${margin_top}px`
    pelicula.style.left = `${margin_left}px`
    pelicula.style.background = "black"
    pelicula.style.opacity = "0.7"
    pelicula.style.anima
    if (fundo) {
        elContainner.appendChild(pelicula)
    }    
    var svg =`
    <svg id="svgLoding" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(241, 242, 243, 0); display: block;" width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path width="${dimencao}px" height="${dimencao}px" d="M14 50A36 36 0 0 0 86 50A36 39.3 0 0 1 14 50" fill="#2aa7c9" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="0.641025641025641s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.65;360 50 51.65"></animateTransform>
        </path>
    </svg>
    `

    var el = document.createElement("div")
    el.id = "containnerLoding"
    el.style.position = "absolute"
    el.style.zIndex = "100"  
    var w = 150
    var h = 150
    el.innerHTML = svg
    elContainner.appendChild(el)
    document.querySelector("#containnerLoding > svg").style.width =dimencao
    document.querySelector("#containnerLoding > svg").style.height =dimencao
    
    el.style.left = `${+(margin_left+innerWidth/2)-(w/2)}px`
    el.style.top = `${(margin_top+innerheight/2)-(h/2)}px`

    if (timeduration) {
        setTimeout(() => {
            ExitLooding() 
        }, timeout);   
    }
    }