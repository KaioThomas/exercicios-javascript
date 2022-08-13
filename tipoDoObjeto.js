// criar um objeto e
// exibir somente as propriedades do tipo string 

const livro = {
    titulo: 'Harry Potter',
    autora: 'J.k Rowlling',
    ano: 2001
}

function exibirPropriedade(objeto){
    for(prop in objeto){
        if(typeof objeto[prop] === 'string'){
            console.log('prop:', prop, 'objeto:', objeto, 'objeto[prop]:', objeto[prop])
        }
    }

}

exibirPropriedade(livro);