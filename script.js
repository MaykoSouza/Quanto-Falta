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

        alert("Escolha uma data!")
        return;
        
    }

/* O objeto Date quando recebe uma string como parâmetro, por padrão o Js converte o horário para UTC, 
adicionando +"T00:00" forçamos a conversão para data local*/

    let dataEscolhida = new Date(dataInput +"T00:00")
    const dataAtual = new Date()


    if(dataEscolhida < dataAtual){

        alert("Escolha uma data Futura")
        return;

    }

    const diferencaMS = (dataEscolhida - dataAtual) 
    const diferencaDias = diferencaMS /(1000 * 60 * 60 * 24)


}

function mostrarDados(){

   const containerPassword = document.querySelector("#container-password");
    containerPassword.classList.remove("hide")

    const password = document.querySelector("#password");
    

     
}

// atualiza o relógio a cada segundo
setInterval(atualizaRelogio, 1000)


//chamando a função assim que a página é recarregada
atualizaRelogio()



botao.addEventListener("click", () => {

    compararDatas()
    mostrarDados()

})


