var bola = document.getElementById('bola')

var velocidade = 1
var gravidade = 0.5

var x = 509
var y = 382.5

function movimento() {
    if (x>10 && x<991 && y>10 && y<591) {

        if (x>500.5 && y>=300.5) {
            x += velocidade
            y += (gravidade*-1)
        }
        else if (x>=500.5 && y<300.5) {
            x += (velocidade*-1)
            y += (gravidade*-1)
        }
        else if (x<500.5 && y<300.5) {
            x += (velocidade*-1)
            y += gravidade
        }
        else {
            x += velocidade
            y += gravidade
        }

        bola.style.left = x + 'px'
        bola.style.bottom = y + 'px'
        
        loop = requestAnimationFrame(movimento)
    }
}

function load() {
    movimento()
}

window.addEventListener("click", load)