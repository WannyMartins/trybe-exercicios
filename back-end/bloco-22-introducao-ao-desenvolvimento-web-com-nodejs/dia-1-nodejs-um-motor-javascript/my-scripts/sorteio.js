const rl = require('readline-sync');

function random(){
  const numbersorteado = Math.floor(Math.random()*10)
  return numbersorteado
};

function main(){
  const aposta = rl.questionInt('Qual número você aposta? ');
  const sorteado = random();
  if(sorteado === aposta){
   console.log(`O número sorteado é ${sorteado} e você apostou ${aposta} Você Acertou!!!!`);
  }
   console.log(`O número sorteado é ${sorteado} e você apostou ${aposta} Infelizmente você errou...`);

   main();

  };


main();