// receber uma quantidade de valores para avaliar
// exibe se cada valor é impar ou par



function exibirTipo(numero){
    for (let index = 0; index <= numero; index++) {
        if (index % 2 === 0)
            console.log(index,'Par');
        else 
            console.log(index,'Impar');
    }
}

exibirTipo(5);