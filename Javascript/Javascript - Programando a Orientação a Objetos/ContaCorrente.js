export class ContaCorrente {
    cliente;
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this.saldo >= valor) { 
            this.saldo -= valor;  
            return valor;
        }
    }

    depositar(valor){
        if(this.saldo > 0) { 
            return;
        }
        this.saldo += valor;    

    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }
}
