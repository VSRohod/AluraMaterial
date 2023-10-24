import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";

const conta2 = new ContaCorrente();
conta2.saldo = 0;

ContaCorrenteRicardo.Cliente = cliente1;

let valor = 200;
ContaCorrenteRicardo.transferir(200, conta2 );

console.log("valor:", valor);
console.log(conta2);