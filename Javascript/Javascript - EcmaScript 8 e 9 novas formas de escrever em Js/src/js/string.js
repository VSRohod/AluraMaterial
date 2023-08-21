const nome = "Gustavo";
const sobrenome = "Oshiro";

// pad start
const nomeCompleto = nome + " " + sobrenome;

const nomeCompletoStringPadding = sobrenome.padStart( 14 , nome);
// primeiro valor quantos caracteres a tring final, a tring para concatenar

document.getElementById("stringPadding").innerHTML = nomeCompletoStringPadding;

// pad end
const nomeCompletoPadEnd= sobrenome.padEnd( 14 , nome);
// primeiro valor quantos caracteres a tring final, a tring para concatenar

document.getElementById("stringPaddingEnd").innerHTML = nomeCompletoPadEnd;

const numeroCartao = "4890"

document.getElementById("numeroCartao").innerHTML = numeroCartao.padStart( 16 , "*")

