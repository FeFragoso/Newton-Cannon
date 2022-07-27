var X
var Y
var G = 0.0000000000667
var M = 1000000000000
var m = 1
var dX
var dY

function load(){
    
    bola = document.getElementById('bola')
    gravidade = document.getElementById('terra')

    // X
    X = 508
    velocidadeX = 0.1
    dX = Math.abs(X - 501)
    aceleracaoX = -1*(G*M*m/(dX*dX))
    // Y
    Y = 382.75
    velocidadeY = 0
    dY = Math.abs(Y - 301)
    aceleracaoY = -1*(G*M*m/(dY*dY))
    
    movimento()
}

function movimento(){

    if (X < 987.5 && X > 0 && Y > 0 && Y < 587.5) {
        // X
        velocidadeX = velocidadeX + aceleracaoX
        X = X + velocidadeX
        bola.style.left = X + 'px'
    
        // Y
        velocidadeY = velocidadeY + aceleracaoY
        Y = Y + velocidadeY
        bola.style.bottom = Y + 'px'
    
        tempo = requestAnimationFrame(movimento)
    }
}

const posicaoX = ()=> {
    const { left } = getComputedStyle(bola)
    
    const valor = +left.replace('px', '')
    
    return valor
}

const posicaoY = ()=> {
    const { bottom } = getComputedStyle(bola)
    
    const valor = +bottom.replace('px', '')
    
    return valor
}

window.addEventListener("click", load)


/*
x = 0 => gravidade = 0
x = 430 => gravidade = aceleracaoX
x = 570 => gravidade = aceleracaoX
x = 1000 => gravidade = 0

y = 0 => gravidade = 0
y = 230 => gravidade = aceleracaoY
y = 370 => gravidade = aceleracaoY
y = 600 => gravidade = 0
*/