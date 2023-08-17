// SELECIONANDO ELEMENTOS JS 
// document.getElementById
// document.getElementsByClassName
// document.getElementsByName

// PRIMEIRA APLICAÇÃO
// const robotron = document.querySelector("#robotron");
// robotron.addEventListener("click", () => {
//     console.log("Clique no robô");
// });

// function dizOi(nome){
//     console.log(nome);
//     console.log("Bem vindo ao Robotron 2000");
// }
// dizOi("Victor");


// NÃO DINAMICO
// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");

// const controle = document.querySelectorAll(".controle-ajuste");

// somar.addEventListener("click", () => {
//     manipulaDados("somar");
// });

// subtrair.addEventListener("click", (evento) => {
//     manipulaDados("subtrair");
// });

// function manipulaDados(operacao){
//     if (operacao === "subtrair"){
//         braco.value = Number(braco.value) - 1
//     }
//     else{
//         braco.value = Number(braco.value) + 1
//     }
// }


// DINAMICO
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstastiticas(evento.target.dataset.peca);
    });
});

function manipulaDados(operacao,controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = Number(peca.value) - 1;
    }
    else{
        peca.value = Number(peca.value) + 1;
    }
}

function atualizaEstastiticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    });
};



