console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
// const primeiroNome = "Ricardo"; pois const não sobrescreve
let primeiroNome = "Ricardo";
const sobrenome = "Bugan";

console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// evitar sobrescrever constantemente uma variavel
// X primeiroNome = primeiroNome + sobrenome
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
// nomeCompleto = 2; Não pode pois const não sobrescreve!

// porém casos como o seguinte são aconselháveis
let contador = 0;
contador = contador + 1;

let idadeExemplo; //declarando variavel
idadeExemplo = 26;  //atribuindo valor