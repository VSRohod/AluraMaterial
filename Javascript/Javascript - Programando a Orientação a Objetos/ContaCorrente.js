export class ContaCorrente {
    cliente;
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor) { 
            this._saldo -= valor;  
            return valor;
        }
    }

    depositar(valor){
        if(this._saldo > 0) { 
            return;
        }
        this._saldo += valor;    

    }

    transferir(valor, conta){
        // conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        // valor = 20;
    }
}
