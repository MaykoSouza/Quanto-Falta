const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const anos = document.getElementById("ano")
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

function compararDatas(){

    let dataInput = document.getElementById("dataEscolhida").value

    if(!dataInput){

        alert("Insira uma data")

      return;
        
    }

    /* O objeto Date quando recebe uma string como parâmetro, por padrão o Js converte o horário para UTC.
    Adicionando +"T00:00" forçamos a conversão para data local*/

    const ano = parseInt(dataInput.split("-")[0])
    const dataEscolhida = new Date(dataInput +"T00:00")
    const dataAtual = new Date()
    const anoMaximo = 5000


    if(dataEscolhida < dataAtual){

        alert("Escolha uma data Futura")
        return;

    }
    if(ano > anoMaximo){

        alert("Escolha um ano menor que 5000")
        return

    }
  
    const diferencaMS = (dataEscolhida - dataAtual) 
    const diferencaDias = diferencaMS /(1000 * 60 * 60 * 24 )
    const diferencaHoras = diferencaMS /(1000 * 60 * 60)
    const diferencaMinutos = diferencaMS /(1000 * 60)

    return{
        dias: Math.floor(diferencaDias),
        horas: Math.floor(diferencaHoras % 24),
        minutos: Math.floor(diferencaMinutos % 60)
    }
}

function mostrarDados(resultado){

    if(!compararDatas()){

        return;
    }

    const containerPassword = document.querySelector("#container-password");
    containerPassword.classList.remove("hide")

    const finishresult = document.querySelector("#password");
    finishresult.innerHTML = ` ${resultado.dias} Dias ${resultado.horas} horas e ${resultado.minutos} Minutos ` 
    
}


botao.addEventListener("click", () => {


    const resultado = compararDatas()
    if(!resultado) return;
    mostrarDados(resultado)


})

// atualiza o relógio a cada segundo
setInterval(atualizaRelogio, 1000)


//chamando a função assim que a página é recarregada
atualizaRelogio()

