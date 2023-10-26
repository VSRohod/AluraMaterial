const asyncIterator = {
    [Symbol.iterator]: () => {
        let id = 0;
        return {
            next: async ()=>{
                id++;
                const alimento = await tabela.asyncGet('alimentos', id);
                if(alimento){
                    return {value : alimento , done : false};
                }else{
                    return { done : true}
                }
            }
        };
    }
};


( async () => {
    const iterator = asyncIterator[Symbol.iterator]();

    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    
})();