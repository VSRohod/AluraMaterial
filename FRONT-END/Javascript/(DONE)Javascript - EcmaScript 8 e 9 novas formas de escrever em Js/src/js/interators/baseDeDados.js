function tabelaAlimentos(){
    const tabelas = {
        alimentos: {
            1: { nome: 'Feijão' },
            2: { nome: 'Arroz' },
            3: { nome: 'Carne' },
            4: { nome: 'Chocolate' }
        }
    };
    return{
        get : (nome, id) => tabelas[nome][id],
        asyncGet : (nome, id ) => delay(50).then(() => tabelas[nome][id])
    };
}

const tabela = tabelaAlimentos();
