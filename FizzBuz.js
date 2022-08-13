// divisivel por 3 e 5 => 'FizzBuz'
// else => valor de entrada
// não é um número => não é um número

const resultado = fizzBuz(30);
console.log(resultado);

function fizzBuz(entrada){
    if(typeof entrada !== 'number'){
        return 'Não é um número';
    } 
    if(entrada % 3 === 0 && entrada % 5 === 0)
     return 'FizzBuz';

    if(entrada % 3 === 0){
        return 'Fizz';
    } 
    if(entrada % 5 === 0){
        return 'Buzz';
    } 
    if (typeof entrada === 'number')
    return entrada;
}