var bola = document.getElementById('bola')

var x0 = 509
var xf
var y0 = 382.5
var yf

var gravidade = 5
var velocidade = 1

function movimento() {
    if (x0>10 && x0<991 && y0>10 && y0<591) {
        tempoX = Math.sqrt((2*y0)/gravidade)
        tempoY = Math.sqrt((2*x0)/gravidade)

        xf = x0+(velocidade*tempoX)
        yf = y0-(velocidade*tempoY)

        bola.style.left = xf + 'px'
        bola.style.bottom = yf + 'px'

        x0 = xf
        y0 = yf

        console.log(x0, y0)
        
        loop = requestAnimationFrame(movimento)
    }
}

function load() {
    x0 = 509
    y0 = 382.5

    movimento()
}

window.addEventListener("click", load)


// 1Q { x = 500.5 - 1001 | y = 300.5 - 601 }
// 2Q { x = 500.5 - 1001 | y = 0 - 300.5 }