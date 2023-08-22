// criação de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Victor';

    if(nome === 'Victor'){
        resolve('Usuário encontrado');
    }else{
        reject('O usuário não foi encontrado');
    }
});

// then chama o promise
myPromise.then((data) => {
    console.log(data);
});

// encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Victor';

    if(nome === 'Victor'){
        resolve('Usuário encontrado');
    }else{
        reject('O usuário não foi encontrado');
    }
});

// then chama o promise
myPromise2.then((data) => {
    return data.toLowerCase();
}).then((stringModificada) => {
    console.log(stringModificada);
});

// Retorno catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Joao';

    if(nome === 'Victor'){
        resolve('Usuário encontrado');
    }else{
        reject('O usuário não foi encontrado');
    }
});

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: '+err);
});