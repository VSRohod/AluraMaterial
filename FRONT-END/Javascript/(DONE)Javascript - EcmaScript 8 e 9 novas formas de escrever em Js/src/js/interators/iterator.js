const iteratorAlimentos = {
    [Symbol.iterator]:() => {
        let id = 0;
        return{
            next: () => {
                id++;
                const alimento = tabela.get('alimentos', id);
                if(alimento){
                    return{value : alimento, done : false };
                }else{
                    return{done : true}
                }
            }
        };
    }
};


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

for(const alimento of iteratorAlimentos){
    console.log(alimento);
}