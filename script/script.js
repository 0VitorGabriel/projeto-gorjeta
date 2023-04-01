
// input:range e input:number

let valor = document.querySelector('input#id_valor')

let porcentagem_gorjeta = document.querySelector('input#id_porcentagem')

/* respectivamente, output que mostra a gorjeta, depois, o output que mostra a gorjeta mais o valor dentro do input:number e o output ao lado do input:range (para mostrar a porcentagem de acordo com o que o usuário desejar). */

let resultado_gorjeta = document.querySelector('output#gorjeta')

let resultado_total = document.querySelector('output#total_gorjeta')

let mostrar_porcentagem = document.querySelector('output#mostrar_porcentagem')

// area aonde será mostrado o resultado

let area_resultado = document.querySelector('section.resultado')

porcentagem_gorjeta.addEventListener('input', function mostra_porcentagem() {
    mostrar_porcentagem.innerHTML = Number(porcentagem_gorjeta.value)
})

function verifica_dados_input() {
    if (valor.value.length === 0) {
        return false
    } else {
        return true
    }
}

function mostra_resultado() {
    area_resultado.classList.add('mostra_resultado')
}

function calcula_gorjeta() {
    if (verifica_dados_input()) {
        resultado_gorjeta.innerHTML = (
            Number(porcentagem_gorjeta.value) * Number(valor.value) / 100
        ).toFixed(0)

        mostra_resultado()
    }
}

function soma_gorjeta() {
    if (verifica_dados_input()) {

        resultado_total.innerHTML = (
            (Number(porcentagem_gorjeta.value) * Number(valor.value) / 100) + Number(valor.value)
        ).toFixed(0)

        mostra_resultado()
    }
}

porcentagem_gorjeta.addEventListener('input', calcula_gorjeta, soma_gorjeta)

valor.addEventListener('input', soma_gorjeta, soma_gorjeta)