import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// const cliente1Nome = "Ricardo";
// const cliente1CPF = 1112223309;
// const cliente1Agencia = 1001;
// const cliente1Saldo = 0;

// const cliente2Nome = "Alice";
// const cliente2CPF = 8882223309;
// const cliente2Agencia = 1001;
// const cliente2Saldo = 0;

//const cliente3Nome = "Alice";
//const cliente3Rg = 10923;
//const cliente3CPF = 9992223309;
//const cliente3Agencia = 1001;
//const cliente3Saldo = 0;

// console.log(cliente1Nome);

// colocando em uma class

// class Cliente {
//     nome;
//     cpf;
//     // agencia;
//     // saldo;
// }

const cliente1 = new Cliente("Ricardo", 1112223309);
const cliente2 = new Cliente("Alice", 8882223309);

let numeroDeContas = 0;
//cliente1.nome = "Ricardo";
//cliente1.cpf = 1112223309;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;
//console.log(cliente1);

//const cliente2 = new Cliente();
//cliente1.nome = "Alice";
//cliente1.cpf = 8882223309;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;
//console.log(cliente2);

// class é um molde de objeto, new Cliente é uma instancia!

// class ContaCorrente {
//     agencia;
//     saldo;

//     sacar(valor){
//         if(this.saldo >= valor){ //this para se referir a conta corrente atual
//             this.saldo -= valor;  
//             return valor // pois senão ele não retorna o valor definido, para a aplicação
//         }
//     }

//     depositar(valor){
//         if(this.saldo > 0){ //this para se referir a conta corrente atual
//             return;
//         }
//         this.saldo += valor;    

//     }
// }

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);


//ContaCorrenteRicardo.saldo = 0;
//ContaCorrenteRicardo.agencia = 1001;
//ContaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente(102, cliente2);

//conta2.cliente = 0;
//conta2.cliente.nome = "Alice";
//conta2.cliente.cpf = 8882223309;

//conta2.cliente = cliente2
// conta2.agencia = 102;
// console.log(ContaCorrenteRicardo.saldo);
// ContaCorrenteRicardo.depositar(100);
// ContaCorrenteRicardo.depositar(200);
// ContaCorrenteRicardo.depositar(-1);
// console.log(ContaCorrenteRicardo.saldo);
// let valorSacado = 200;
// const valorSacado = ContaCorrenteRicardo.sacar(50);
// console.log(valorSacado); // sem return volta undefined

let valor = 200
// ContaCorrenteRicardo.depositar(500);
ContaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2.numeroDeContas)

// console.log(cliente2);

// discussão se # será implementada para atributo privado no js class