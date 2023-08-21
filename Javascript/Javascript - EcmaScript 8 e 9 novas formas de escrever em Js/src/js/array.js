const aprovados = ['Marcelo', 'Aline', 'Gustavo', 'Ricardo'];

for (let nome of aprovados){
    if (nome === 'Gustavo'){
        console.log("Aprovado");
        return true;
    }else{
        console.log("Não encontrado")
    }
}

// metodo 2
const nomeIndexOf = aprovados.indexOf("Gustavo");
console.log(nomeIndexOf)

// adição do ecma

const nomeAprovado = aprovados.includes("Gustavo");
// procura elementos do nosso array
if(nomeAprovado){
    console.log("Aprovado");
}else{
    console.log("Não aprovado")
}
console.log(nomeAprovado)
