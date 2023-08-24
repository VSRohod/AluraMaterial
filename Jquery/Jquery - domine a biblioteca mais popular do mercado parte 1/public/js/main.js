var frase = $(".frase").text();
// jquery função selectora
// $ atalho
var numPalavras = frase.split("").length;
var tamanhoFrase = $('#tamanho-frase')
// split retorna um array com as palavras separadas.
// se eu passo valores pelo text() ele sobrescreve
tamanhoFrase.text(numPalavras)

var campo = $(".campo-digitacao");
// on === addEventListener
campo.on("input", function(){
    var conteudo = campo.val();
    // Para sermos mais precisos na contagem, utilizaremos uma expressão regular em vez dos espaço vazio. A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio: /\S+/.
    var qtdPalavras = conteudo.split(/\S+/).length - 1
    $("#contador-palavras").text(qtdPalavras)

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres)

})