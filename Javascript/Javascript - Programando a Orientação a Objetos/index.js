// const cliente1Nome = "Ricardo";
// const cliente1CPF = 1112223309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// const cliente2Nome = "Alice";
// const cliente2CPF = 8882223309;
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;

const cliente3Nome = "Alice";
const cliente3Rg = 10923;
const cliente3CPF = 9992223309;
const cliente3Agencia = 1001;
const cliente3Saldo = 0;

// console.log(cliente1Nome);

// colocando em uma class

class Cliente {
    nome;
    cpf;
    // agencia;
    // saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1112223309;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;
console.log(cliente1);

const cliente2 = new Cliente();
cliente1.nome = "Alice";
cliente1.cpf = 8882223309;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;
console.log(cliente2);

// class é um molde de objeto, new Cliente é uma instancia!

class ContaCorrente {
    agencia;
    saldo;
}

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;