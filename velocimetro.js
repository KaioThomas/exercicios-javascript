// velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso os pontos forem maior do que 12 => "Carteira Suspensa"

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    
    if(velocidade <= velocidadeMaxima ) return 'OK';
     else {
       const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
       if (pontos > 12) return 'Carta Suspensa';
       else return `pontos: ${pontos}`;
    }
}
console.log(verificarVelocidade(80));