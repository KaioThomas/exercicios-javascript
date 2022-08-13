// criar função que retorna a soma de 
// todos os multiplos de 3 e 5 dentro desse número, somando-os

// (10) [9] 8 7 [6] (5) 4 [3] 2 1

function somar(numero){
    let m3 = 0;
    let m5 = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0 ){
           m3 += i;
        }
        if(i % 5 === 0) {
           m5 += i;
        } 
    } 
    console.log(m3 + m5);
}
somar(15)