var bola = document.getElementById('bola')
var velocidade = 2.5
var gravidade = 1
var loop
var x = 509
var y = 383

function movimento() {
    cancelAnimationFrame(loop)

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
    }
}

function reset() {
    clearInterval(loop)

    aceleracao = 0

    x = 509
    y = 383

    bola.style.left = '509px'
    bola.style.bottom = '383px'
}

function disparar() {
    loop = setInterval(movimento, 50)
}

// ------------------------------------------------

// PONTO DE ORIGEM { X = 501 | Y = 301 }

e = 360
t = 
angulo = 
r =  // x = 509 | y = 383