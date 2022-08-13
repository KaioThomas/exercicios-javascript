// Obter a média a partir de um Array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const arrayNotas = [70, 70, 80];
// média 75

function mediaAluno(notas){
    let somaDasNotas = 0;

   for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      somaDasNotas += nota
   }

   let media = somaDasNotas/notas.length;
   if(media > 0 && media <= 59) 
    return 'F'
   if(media >= 60 && media <= 69 )
    return 'D'
   if(media >= 70 && media <= 79)
    return 'C'
    if(media >= 80 && media <= 89)
    return 'B'
   if(media >= 90 && media <= 100)
    return 'A'
}

console.log(mediaAluno(arrayNotas));

// outra solução

 function mediaDoAluno(todasAsNotas){
    const media = calcularMedia(todasAsNotas);
    
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';
 }

 function calcularMedia(array){
    let soma = 0;
    for (let valor of array) {
            soma += valor;
    }
    const media = soma/(array.length);
 }