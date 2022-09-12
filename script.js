var bola = document.getElementById('bola')
var angulo = 84
var radiano
var contadorRaio = 0
var raio
var loop
var x = 509
var y = 383

function calculo() {
    if (x>10 && x<991 && y>10 && y<591) {
        x -= 501
        y -= 301

        raio = contadorRaio+(Math.sqrt((x**2)+(y**2)))

        radiano = (angulo*Math.PI)/180

        x = 501+(Math.cos(radiano)*raio)
        y = 301+(Math.sin(radiano)*raio)
    }

    angulo--
    contadorRaio += 0.0001

    return x, y
}

function disparo() {
    cancelAnimationFrame(loop)

    x, y = calculo()

    bola.style.left = x + 'px'
    bola.style.bottom = y + 'px'

    loop = requestAnimationFrame(disparo)
}

function reset() {
    cancelAnimationFrame(loop)

    contadorRaio = 0
    angulo = 84

    x = 509
    y = 383

    bola.style.left = '509px'
    bola.style.bottom = '383px'
}
