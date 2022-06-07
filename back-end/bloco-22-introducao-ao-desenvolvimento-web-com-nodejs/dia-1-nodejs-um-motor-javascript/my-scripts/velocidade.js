const rl = require('readline-sync');

function calculaVelocidadeMedia(distancia, tempo) {
  const result = (distancia/tempo);
  return result;
}

function main(){
  const distancia = rl.questionInt('Qual a distancia? ');
  const tempo = rl.questionInt('Qual tempo? ')
  const velMedia = calculaVelocidadeMedia(distancia, tempo)
  console.log(`A velocidade média é ${velMedia.toFixed(2)}m/s.`)
}



main();

// console.log(velocidade())

// const readline = require('readline-sync');

// function calculaVelocidadeMed(distancia, tempo) {
//   const velocidadeMedia = (distancia / tempo);

//   return velocidadeMedia;
// }

// function main() {
//   const distancia = readline.questionInt('Distância percorrida (m): ');
//   const tempo = readline.questionInt('Tempo gasto (s): ');

//   const velocidadeMed = calculaVelocidadeMed(distancia, tempo);

//   console.log(`Velocidade média: ${velocidadeMed.toFixed(2)} m/s`);
// }

// main();