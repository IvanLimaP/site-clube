var setaDireita = window.document.getElementById("seta-direita")
var domingoDivertido = window.document.getElementById("domingoDivertido")
var futebolCerveja = window.document.getElementById("futebolCerveja")
var torneioBeachTenis = window.document.getElementById("torneioBeachTenis")
var unifomefutebol = window.document.getElementById("uniformefutebol")
var setaEsquerda = window.document.getElementById("seta-esquerda")




function RolarParaDireita() {
    domingoDivertido.style = "display:none"
    futebolCerveja.style = "display:none"
    unifomefutebol.style = "display:flex"
    torneioBeachTenis.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display: flex"
}

function RolarParaEsquerda() {
    domingoDivertido.style = "display:flex"
    futebolCerveja.style = "display:flex"
    unifomefutebol.style = "display:none"
    torneioBeachTenis.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}

