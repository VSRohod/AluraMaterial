(async function asyncListaLivros() {
    try {
        const resposta = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');


        const dados = await resposta.json();
        const items = dados.items.map(item => item);
        const informacoes = items.map(item => item.volumeInfo);
        const titulos = informacoes.map(info => info.title);
        renderizarLista("asyncListaLivros", titulos)
    } catch (erro) {
        console.error("Eita deu ruim ! :", erro)
    }finally{
        console.log("A função asyncListaLivros foi executada ");
    }
})()