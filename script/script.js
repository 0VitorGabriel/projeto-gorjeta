
// input:range e input:number

let valor = document.querySelector('input#id_valor')

let porcentagem_gorjeta = document.querySelector('input#id_porcentagem')

/* respectivamente, output que mostra a gorjeta, depois, o output que mostra a gorjeta mais o valor dentro do input:number e o output ao lado do input:range (para mostrar a porcentagem de acordo com o que o usuário desejar). */

let resultado_gorjeta = document.querySelector('output#gorjeta')

let resultado_total = document.querySelector('output#total_gorjeta')

let mostrar_porcentagem = document.querySelector('output#mostrar_porcentagem')

porcentagem_gorjeta.addEventListener('input', function () {
    mostrar_porcentagem.innerHTML = Number(porcentagem_gorjeta.value)
})

let calcula_gorjeta = () => {
    return resultado_gorjeta.innerHTML = Number(porcentagem_gorjeta.value) * Number(valor.value) / 100
}
let soma_gorjeta = () => {
    return resultado_total.innerHTML = (Number(porcentagem_gorjeta.value) * Number(valor.value) / 100) + Number(valor.value)
}

porcentagem_gorjeta.addEventListener('input', () => {
    calcula_gorjeta()
})

valor.addEventListener('input', () => {
    soma_gorjeta()
})