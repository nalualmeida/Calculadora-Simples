var txtNumero1 = document.querySelector("#n1")
var txtNumero2 = document.querySelector("#n2")
var txtVisor = document.querySelector("#visor")

function somar(){
    let numero1 = Number(txtNumero1.value)
    let numero2 = Number(txtNumero2.value)
    let som = numero1 + numero2

    operacao.value = '+'
    visor.value = som.toFixed(2)
}
function subtrair(){
    let numero1 = Number(txtNumero1.value)
    let numero2 = Number(txtNumero2.value)
    let sub = numero1 - numero2

    operacao.value = '-'
    visor.value = sub.toFixed(2)
}
function multiplicar(){
    let numero1 = Number(txtNumero1.value)
    let numero2 = Number(txtNumero2.value)
    let mult = numero1 * numero2

    operacao.value = 'x'
    visor.value = mult.toFixed(2)
}
function dividir(){
    let numero1 = Number(txtNumero1.value)
    let numero2 = Number(txtNumero2.value)
    let div = numero1 / numero2

    operacao.value = '/'
    visor.value = div.toFixed(2)
}
