function load(){
    bola = document.getElementById('bola')
    
    // X
    posicaoX = 508
    velocidadeX = 1
    aceleracaoX = 0
    // Y
    posicaoY = 382.75
    velocidadeY = 0
    aceleracaoY = 0.01

    movimento()
}

function movimento(){

    if (posicaoX < 987.5 && posicaoY < 587.5) {
        // X
        velocidadeX = velocidadeX + aceleracaoX
        posicaoX = posicaoX + velocidadeX
        bola.style.left = posicaoX + 'px'
    
        // Y
        velocidadeY = velocidadeY + aceleracaoY
        posicaoY = posicaoY + velocidadeY
        bola.style.bottom = posicaoY + 'px'
    
        tempo = requestAnimationFrame(movimento)
    }
}

window.addEventListener("load", load)