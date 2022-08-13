// Criar uma função que exiba a quantidade de asteríscos que a linha possui

quantidadeDeAsteriscos(3);

function quantidadeDeAsteriscos(quantidadeASerExibida){
    let linha = '';

    for(let i = 1; i <= quantidadeASerExibida; i++){
        linha += '*'
        
    console.log(linha)
    }
}