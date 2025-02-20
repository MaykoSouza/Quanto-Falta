const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const anos = document.getElementById("ano")
const data = document.getElementById("data")
const botao = document.getElementById("button")




function atualizaRelogio() {
    // criar um objeto Date a cada chamada 

    const agora = new Date()

    //Atualiza os elementos 
    horas.textContent = agora.getHours().toString().padStart(2, "0")
    minutos.textContent = agora.getMinutes().toString().padStart(2, "0")
    segundos.textContent = agora.getSeconds().toString().padStart(2, "0")
    dia.textContent = agora.getDate().toString().padStart(2, "0")
    mes.textContent = (agora.getMonth() + 1).toString().padStart(2, "0")
    ano.textContent = agora.getFullYear().toString().slice(-2)

}

// atualiza o relógio a cada segundo
setInterval(atualizaRelogio, 1000)


//chamando a função assim que a página é recarregada
atualizaRelogio()


botao.addEventListener("click", () => {


})


