let valor = document.querySelector('input#id_valor')

let porcentagem_gorjeta = document.querySelector('input#id_porcentagem')

let resultado_gorjeta = document.querySelector('output#gorjeta')

let resultado_total = document.querySelector('output#total_gorjeta')

let mostrar_porcentagem = document.querySelector('output#mostrar_porcentagem')

porcentagem_gorjeta.addEventListener('input', function () {
    mostrar_porcentagem.innerHTML = Number(porcentagem_gorjeta.value)
})

function calcula_soma_gorjeta() {
    let calcula_gorjeta = function () {
        return resultado_gorjeta.innerHTML = Number(porcentagem_gorjeta.value) * Number(valor.value) / 100
    }
    let soma_gorjeta = function () {
        return resultado_total.innerHTML = (Number(porcentagem_gorjeta.value) * Number(valor.value) / 100) + Number(valor.value)
    }
    return calcula_gorjeta() , soma_gorjeta()
}

porcentagem_gorjeta.addEventListener('mouseup', function () {
    calcula_soma_gorjeta()
})

valor.addEventListener('mouseout', function () {
    calcula_soma_gorjeta()
})