const message = document.querySelector('.fizzbuz-message');
const numberBtn = document.getElementById('numberBtn');
const numberInput = document.getElementById('numberInput');

numberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  exibirMessage(fizzBuz(numberInput.value));
});

function clear(){
    numberInput.value = '';
}

function exibirMessage(retorno){
    message.innerHTML = retorno;
}

function fizzBuz(number){
    let entrada = parseInt(number);

    if(typeof entrada !== 'number' || number === ''){
        return 'Não é um número';
    }
    if(entrada === 0)
     return `é impossivel dividir por ${entrada}` 
    if(entrada % 3 === 0 && entrada % 5 === 0)
     return `${entrada} é divisivel por 3 e por 5`;

    if(entrada % 3 === 0)
        return `${entrada} é divisivel por 3`;
    if(entrada % 5 === 0)
        return `${entrada} é divisivel por 5`; 
    if (typeof entrada === 'number')
    return `${entrada} não é divisivel por 5 nem por 3`;
}